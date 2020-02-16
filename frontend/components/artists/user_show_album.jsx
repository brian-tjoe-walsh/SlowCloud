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
              {/* <div id="waveform"></div> */}
              <img className="waveForm" src={window.waveform} />
            </div>
          ) : 
            (<div className="waveFormContainer">
              {/* <div id="waveform"></div> */}
              <img className="waveForm-opacity" src={window.waveform} />
            </div>
          )}
        </div>
      </div>
    )
  }
};

export default UserShowAlbum;