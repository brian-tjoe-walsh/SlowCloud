import { Link } from 'react-router-dom';
import React from 'react';

class UserShowAlbum extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSong: null,
      playing: false
    };
    this.playSong = this.playSong.bind(this);
    this.afterClick = this.afterClick.bind(this);
    // this.waveSurfer = null;
  }

  componentDidMount() {
    // debugger
    if (Object.values(this.props.state.ui.mediaPlayer).length > 0 &&
      this.props.state.ui.mediaPlayer.songs[0]) {
      if (this.props.state.ui.mediaPlayer.songs[0].album_id === this.props.album.id) {
        // debugger
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
    
    // if (!this.waveSurfer) {
    //   this.waveSurfer = WaveSurfer.create({
    //     container: '#waveform',
    //     scrollParent: true,
    //     progressColor: "#af74ca"
    //   });
    //   debugger
    // }
    // this.waveSurfer.load(window.song);
  }

  componentDidUpdate() {
    // debugger
    if (Object.values(this.props.state.ui.mediaPlayer).length > 0 &&
      this.props.state.ui.mediaPlayer.songs[0]) {
        if (this.props.state.ui.mediaPlayer.songs[0].album_id === this.props.album.id) {
          // debugger
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

  addHover(e) {
    // debugger
    let eles = document.getElementById(e.currentTarget.id);
    $(eles).addClass("playHovered");
  }
  removeHover(e) {
    let eles = document.getElementById(e.currentTarget.id);
    $(eles).removeClass("playHovered");
  }

  addPauseHover(e) {
    // debugger
    let eles = document.getElementById(e.currentTarget.id);
    $(eles).addClass("playHovered");
  }
  removePauseHover(e) {
    let eles = document.getElementById(e.currentTarget.id);
    $(eles).removeClass("playHovered");
  }

  playSong() {
    let player = document.getElementById("media");
    // debugger
    if (!this.state.currentSong || this.state.currentSong.id !== this.props.state.ui.mediaPlayer.songs[0].album_id) {
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
      <div className="userIndividualAlbum" key={this.props.album.id}>
        <Link to={`/albums/${this.props.album.id}`}><img className="albumArt" id="showPagePic" src={this.props.album.albumUrl}></img></Link>

        <div className="showTitleSpacing">
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
          <div className="waveFormContainer">
            {/* <div id="waveform"></div> */}
            <img className="waveForm" src={window.waveform} />
          </div>
        </div>
      </div>
    )
  }
};

export default UserShowAlbum;