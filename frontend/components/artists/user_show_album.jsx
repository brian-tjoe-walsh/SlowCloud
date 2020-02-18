import { Link } from 'react-router-dom';
import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class UserShowAlbum extends React.Component {

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
    this.findSong = this.findSong.bind(this);
    this.loadSong = this.loadSong.bind(this);
  }

  componentDidMount() {

    if (this.props.album.songs && Object.values(this.props.album.songs).length) {
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
  
      const playButton = document.getElementById(`showPagePlay${this.props.album.id}`);
  
      playButton.addEventListener("click", () => {

        if (playButton.classList.contains("user-play")) {
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
        this.setState({ready: true});
      });
  
      // wavesurfer.on('finish', () => {
      //   playButton.setAttribute('playing', 'false');
      //   playButton.classList.remove('btn-pause');
      //   playButton.classList.add('btn-play');
      // });
  
      // wavesurfer.load(this.props.sample.fileUrl);
      if (!this.state.loaded) {
        this.loadSong();
      }
    }

    // wavesurfer.on('ready', () => {

    //   wavesurfer.params.container.style.opacity = 0.9;
    //   console.log("this should be ready");
    // });

    if (Object.values(this.props.state.ui.mediaPlayer).length > 0 &&
      this.props.state.ui.mediaPlayer.songs[0]) {
      if (this.props.state.ui.mediaPlayer.songs[0].album_id === this.props.album.id) {
        let ele = document.getElementById(`showPagePlay${this.props.album.id}`);
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
            currentSong: this.props.album
          });
        }
      } else {
        let ele = document.getElementById(`showPagePlay${this.props.album.id}`);
        ele.addEventListener("mouseover", (e) => this.addHover(e));
        ele.addEventListener("mouseleave", (e) => this.removeHover(e));
      }

      
    } else {
      let ele = document.getElementById(`showPagePlay${this.props.album.id}`);
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
        if (this.props.state.ui.mediaPlayer.songs[0].album_id === this.props.album.id) {
          let ele = document.getElementById(`showPagePlay${this.props.album.id}`);
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
              currentSong: this.props.album
            });
          }
        } else {
          let ele = document.getElementById(`showPagePlay${this.props.album.id}`);
          ele.addEventListener("mouseover", (e) => this.addHover(e));
          ele.addEventListener("mouseleave", (e) => this.removeHover(e));
        }
    } else {
      let ele = document.getElementById(`showPagePlay${this.props.album.id}`);
      ele.addEventListener("mouseover", (e) => this.addHover(e));
      ele.addEventListener("mouseleave", (e) => this.removeHover(e));
    }
  }

  findSong() {
    // if (document.getElementById("media")) {
    // }
  }

  loadSong() {
    if (!this.state.audioFile) {
      if (document.getElementById("media")) {
        let currentSong = document.getElementById("media").src;
        currentSong = currentSong.split("/song")[1];
        currentSong = currentSong.split(".")[0];
        let currentId = Number(currentSong) + 1;

        let songs = Object.values(this.props.album.songs);
        let found = false;

        for (let i = 0; i < songs.length; i++) {
          let song = songs[i];
          if (song.id === currentId) {
            this.wavesurfer.load(this.props.state.entities.songs[currentId].audio_fileUrl);
            this.setState({ audioFile: true, currentSong: this.props.state.entities.songs[currentId] });
            found = true;
            break;
          }
        }

        debugger

        if (found) {
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

    this.setState({loaded: true});
  }

  regularLoad() {
    if (Object.values(this.props.album.songs).length && this.props.album.songs[0].audio_fileUrl) {
      this.wavesurfer.load(this.props.album.songs[0].audio_fileUrl);
      this.setState({ audioFile: true });
    } else if (Object.values(this.props.state.entities.albums).length && this.props.state.entities.albums[this.props.album.id].songs && this.props.state.entities.albums[this.props.album.id].songs.length && this.props.state.entities.albums[this.props.album.id].songs[0].audio_fileUrl) {
      this.wavesurfer.load(this.props.state.entities.albums[this.props.album.id].songs[0].audio_fileUrl);
      this.setState({ audioFile: true });
    } else if (Object.values(this.props.state.entities.songs).length && this.props.album.songs && this.props.state.entities.songs[this.props.album.songs[0].id].audio_fileUrl) {
      this.wavesurfer.load(this.props.state.entities.songs[this.props.album.songs[0].id].audio_fileUrl);
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

    debugger

    if (!this.state.currentSong || this.state.currentSong.id !== this.props.state.ui.mediaPlayer.songs[0].id) {
      let play = this.props.state.entities.songs[this.props.album.songs[0].id];
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
    if (player && player.paused) {
      this.props.playSong();
      this.setState({ playing: true });

    } else {
      this.props.pauseSong();
      this.setState({ playing: false });
    }
  }

  render() {
    return (
      <div className="userIndividualAlbum" key={this.props.album.id}>
        <Link to={`/albums/${this.props.album.id}`}><img className="albumArt" id="showPagePic" src={this.props.album.albumUrl}></img></Link>

        <div className="showTitleSpacing">
          <div className="space-between">
            <div className="showTitleAdjustments">
              {(this.props.state.ui.mediaPlayer.songs && this.props.state.ui.mediaPlayer.songs[0].album_id === this.props.album.id && this.state.playing) ?
                <i className="fas fa-pause-circle user-pause" id={`showPagePlay${this.props.album.id}`} onClick={this.playSong}></i>
                :
                <i className="fas fa-play-circle user-play" id={`showPagePlay${this.props.album.id}`} onClick={this.playSong}></i>
              }
              <div className="showJustTitles">
                <Link to={`/artists/${this.props.artistId}`} className="showAlbumArtist">{this.props.artist.username}</Link>
                <Link to={`/albums/${this.props.album.id}`} className="showAlbumTitle">{this.props.album.title}</Link>
              </div>
            </div>
            {(this.props.album.songs && Object.values(this.props.album.songs).length) ? 
            (<div className="empty-user-show-container">
                {Object.values(this.props.album.songs).length} Songs
            </div>)
            : 
            (<div className="empty-user-show-container">
              0 Songs
              {(this.props.state.session && this.props.state.session.id === this.props.album.user_id) ? 
                (<Link to={`/upload/`} className="upload-song-button">Upload A Song</Link>) 
              : 
              (null)}
            </div>)}
          </div>
          {(this.props.album.songs && Object.values(this.props.album.songs).length) ? 
          ( <div className="waveFormContainer">
              <div ref={this.waveform} id={`wave-form-${this.props.album.id}`} className='audio-container'></div>
              {/* <img className="waveForm" src={window.waveform} /> */}
            </div>
          ) : 
            (<div className="waveFormContainer">
              {/* <div ref={this.waveform} className='audio-container'></div> */}
              <img className="waveForm-opacity" src={window.waveform} />
            </div>
          )}
        </div>
      </div>
    )
  }
};

export default UserShowAlbum;