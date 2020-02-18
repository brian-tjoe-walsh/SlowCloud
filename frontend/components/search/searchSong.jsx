import { Link } from 'react-router-dom';
import React from 'react';

class SearchSong extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSong: null,
      playing: false,
      audioFile: null,
      ready: false,
      loaded: false
    };
    this.playSong = this.playSong.bind(this);
    this.afterClick = this.afterClick.bind(this);
    this.wavesurfer = null;
    this.waveform = React.createRef();
    this.loadSong = this.loadSong.bind(this);
    this.regularLoad = this.regularLoad.bind(this);
  }

  componentDidMount() {
    debugger

    if (this.props.ele) {
      this.wavesurfer = WaveSurfer.create({
        container: this.waveform.current,
        progressColor: '#AF74CA',
        cursorWidth: 0,
        height: 60,
        barWidth: 1.2,
        barGap: 0,
        normalize: 0,
        backend: 'MediaElement'
      });

      const playButton = document.getElementById(`showPagePlay${this.props.ele.id}`);
      debugger

      playButton.addEventListener("click", () => {

        if (playButton.classList.contains("user-play")) {
          debugger
          let idTag = Number(playButton.id.split("showPagePlay")[1]);
          let wave = document.getElementById(`wave-form-${idTag}`);
          wave.children[1].volume = 0;
          wave.children[1].play();
        } else if (playButton.classList.contains("user-pause")) {
          let idTag = Number(playButton.id.split("showPagePlay")[1]);
          let wave = document.getElementById(`wave-form-${idTag}`);
          wave.children[1].pause();
        }
      }, false);

      this.wavesurfer.on('ready', () => {
        this.setState({ ready: true });
      });

      if (!this.state.loaded) {
        this.loadSong();
      }
    }


    if (Object.values(this.props.state.ui.mediaPlayer).length > 0 &&
      this.props.state.ui.mediaPlayer.songs[0]) {
      if (this.props.state.ui.mediaPlayer.songs[0].id === this.props.ele.id) {
        let ele = document.getElementById(`showPagePlay${this.props.ele.id}`);
        ele.removeEventListener("mouseover", (e) => this.addHover(e));
        ele.removeEventListener("mouseleave", (e) => this.removeHover(e));
        ele.addEventListener("mouseover", (e) => this.addPauseHover(e));
        ele.addEventListener("mouseleave", (e) => this.removePauseHover(e));

        if (this.props.state.ui.mediaPlayer.playing && !this.state.playing) {
          this.setState({
            playing: true
          });
        } else if (!this.props.state.ui.mediaPlayer.playing && this.state.playing) {
          this.setState({
            playing: false
          });
        } else if (!this.state.currentSong) {
          this.setState({
            currentSong: this.props.ele
          });
        }
      } else {
        let ele = document.getElementById(`showPagePlay${this.props.ele.id}`);
        ele.addEventListener("mouseover", (e) => this.addHover(e));
        ele.addEventListener("mouseleave", (e) => this.removeHover(e));
      }


    } else {
      if (this.state.currentSong) {
        this.setState({
          currentSong: null,
          playing: false
        });
      }
      let ele = document.getElementById(`showPagePlay${this.props.ele.id}`);
      ele.addEventListener("mouseover", (e) => this.addHover(e));
      ele.addEventListener("mouseleave", (e) => this.removeHover(e));
    }
  }

  componentDidUpdate() {

    if (!this.state.loaded) {
      this.loadSong();
    }

    if (Object.values(this.props.state.ui.mediaPlayer).length > 0 &&
      this.props.state.ui.mediaPlayer.songs[0]) {
      if (this.props.state.ui.mediaPlayer.songs[0].id === this.props.ele.id) {
        let ele = document.getElementById(`showPagePlay${this.props.ele.id}`);
        ele.removeEventListener("mouseover", (e) => this.addHover(e));
        ele.removeEventListener("mouseleave", (e) => this.removeHover(e));
        ele.addEventListener("mouseover", (e) => this.addPauseHover(e));
        ele.addEventListener("mouseleave", (e) => this.removePauseHover(e));

        if (this.props.state.ui.mediaPlayer.playing && !this.state.playing) {
          this.setState({
            playing: true
          });
        } else if (!this.props.state.ui.mediaPlayer.playing && this.state.playing) {
          this.setState({
            playing: false
          });
        } else if (!this.state.currentSong) {
          this.setState({
            currentSong: this.props.ele
          });
        }
      } else {
        let ele = document.getElementById(`showPagePlay${this.props.ele.id}`);
        ele.addEventListener("mouseover", (e) => this.addHover(e));
        ele.addEventListener("mouseleave", (e) => this.removeHover(e));
      }
    } else {
      let ele = document.getElementById(`showPagePlay${this.props.ele.id}`);
      ele.addEventListener("mouseover", (e) => this.addHover(e));
      ele.addEventListener("mouseleave", (e) => this.removeHover(e));
    }
  }

  loadSong() {
    if (!this.state.audioFile) {
      if (document.getElementById("media")) {
        let currentSong = document.getElementById("media").src;
        currentSong = currentSong.split("/song")[1];
        currentSong = currentSong.split(".")[0];
        let currentId = Number(currentSong) + 1;

        let song = this.props.ele;
        let found = false;

        
        if (song.id === currentId) {
          this.wavesurfer.load(this.props.ele.audio_fileUrl);
          this.setState({ audioFile: true, currentSong: this.props.ele });
          found = true;
        }

        debugger

        if (found && document.getElementById('media').currentTime) {
          let seconds = document.getElementById('media').currentTime;
          this.wavesurfer.setVolume(0);
          this.wavesurfer.play(seconds);
          if (!this.props.state.ui.mediaPlayer.playing) {
            this.wavesurfer.pause();
          }
        } else {
          this.regularLoad();
        }

      } else {
        this.regularLoad();
      }
    }

    this.setState({ loaded: true });
  }

  regularLoad() {
    if (this.props.ele && this.props.ele.audio_fileUrl) {
      this.wavesurfer.load(this.props.ele.audio_fileUrl);
      this.setState({ audioFile: true });
    }
  }

  addHover(e) {
    let eles = document.getElementById(e.currentTarget.id);
    $(eles).addClass("playHovered");
  }
  removeHover(e) {
    let eles = document.getElementById(e.currentTarget.id);
    $(eles).removeClass("playHovered");
  }

  addPauseHover(e) {
    let eles = document.getElementById(e.currentTarget.id);
    $(eles).addClass("playHovered");
  }
  removePauseHover(e) {
    let eles = document.getElementById(e.currentTarget.id);
    $(eles).removeClass("playHovered");
  }

  playSong() {
    let player = document.getElementById("media");
    if (!this.state.currentSong || this.state.currentSong.id !== this.props.state.ui.mediaPlayer.songs[0].id) {
      let play = this.props.state.entities.songs[this.props.ele.id];
      if (this.props.state.ui.mediaPlayer.songs) {
        this.props.deleteSong(this.props.state.ui.mediaPlayer.songs[0]);
        this.props.pauseSong();
        player.pause();
      }
      this.props.addSong(play);

      this.setState({
        currentSong: play,
        playing: true
      });
    }
    this.afterClick(player);
  }

  afterClick(player) {
    if (player.paused) {
      this.props.playSong();
      this.setState({ playing: true });

    } else {
      this.props.pauseSong();
      this.setState({ playing: false });
    }
  }

  render() {
    return (
      <div className="userIndividualAlbum" key={this.props.ele.id}>
        <Link to={`/albums/${this.props.ele.album_id}`}><img className="albumArt" id="showPagePic" src={this.props.ele.album.albumUrl}></img></Link>

        <div className="showTitleSpacing">
          <div className="showTitleAdjustments">
            {(this.props.state.ui.mediaPlayer.songs && this.props.state.ui.mediaPlayer.songs[0].id === this.props.ele.id && this.state.playing) ?
              <i className="fas fa-pause-circle user-pause" id={`showPagePlay${this.props.ele.id}`} onClick={this.playSong}></i>
              :
              <i className="fas fa-play-circle user-play" id={`showPagePlay${this.props.ele.id}`} onClick={this.playSong}></i>
            }
            <div className="showJustTitles">
              <Link to={`/artists/${this.props.ele.artist.id}`} className="showAlbumArtist search-cursor">{this.props.ele.artist.username}</Link>
              <Link to={`/albums/${this.props.ele.album_id}`} className="showAlbumTitle">{this.props.ele.title}</Link>
            </div>
          </div>
          <div className="waveFormContainer">
            <div ref={this.waveform} id={`wave-form-${this.props.ele.id}`} className='audio-container'></div>
            {/* <img className="waveForm" src={window.waveform} /> */}
          </div>
        </div>
      </div>
    )
  }
};

export default SearchSong;