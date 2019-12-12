import React from 'react';
import { Link } from 'react-router-dom';

class Album extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.addHover = this.addHover.bind(this);
    this.removeHover = this.removeHover.bind(this);
    this.playSong = this.playSong.bind(this);
    this.state = {
      state: this.props.state,
      currentSong: false,
      playing: false
    };
  }

  afterClick(player) {
    if (player.paused) {
      let ele = document.getElementById(`pic${this.props.album.id}`);
      ele.removeEventListener("mouseover", this.addClass);
      ele.removeEventListener("mouseleave", this.removeClass);
      let button = document.getElementById(`play${this.props.album.id}`);
      button.removeEventListener("mouseover", this.addClass);
      button.removeEventListener("mouseleave", this.removeClass);
      button.addEventListener("mouseover", this.addPauseHover);
      button.addEventListener("mouseleave", this.removePauseHover);
    } else {
      let ele = document.getElementById(`pic${this.props.album.id}`);
      ele.addEventListener("mouseover", this.addClass);
      ele.addEventListener("mouseleave", this.removeClass);
      let button = document.getElementById(`play${this.props.album.id}`);
      button.addEventListener("mouseover", this.addClass);
      button.addEventListener("mouseleave", this.removeClass);
      button.removeEventListener("mouseover", this.addPauseHover);
      button.removeEventListener("mouseleave", this.removePauseHover);
    }
  }

  playSong() {
    let player = document.getElementById("media");
    let button = document.getElementById(`play${this.props.album.id}`);

    debugger
    if (this.state.currentSong) {
      if (player.paused) {
        this.afterClick(player);
        player.play();
        $(button).addClass("visibleButton"); 
        this.setState({playing: true});
      } else {
        this.afterClick(player);
        player.pause();
        this.setState({playing: false});
      }
    } else {
      this.afterClick(player);

      let play = this.props.album.songs[0];
      this.props.addSong(play);
      $(button).addClass("visibleButton"); 
      this.setState({
        currentSong: true,
        playing: true
      });
    }
  }

  componentDidMount() {
    if (this.props.state.ui.mediaPlayer[0] && this.props.state.ui.mediaPlayer[0].album_id === this.props.album.id) {
      let button = document.getElementById(`play${this.props.album.id}`);
      $(button).addClass("visibleButton");
      button.addEventListener("mouseover", this.addPauseHover);
      button.addEventListener("mouseleave", this.removePauseHover);
      this.setState({
        currentSong: true,
        playing: true
      });
    } else {
      let ele = document.getElementById(`pic${this.props.album.id}`);
      ele.addEventListener("mouseover", this.addClass);
      ele.addEventListener("mouseleave", this.removeClass);
      let button = document.getElementById(`play${this.props.album.id}`);
      button.addEventListener("mouseover", this.addClass);
      button.addEventListener("mouseover", this.addHover);
      button.addEventListener("mouseleave", this.removeClass);
      button.addEventListener("mouseleave", this.removeHover);
    }
  }
  
  addClass() {
    let ele = document.getElementById(`play${this.props.album.id}`);
    $(ele).addClass("visibleButton");
  }
  addHover() {
    let eles = document.getElementById(`playButton${this.props.album.id}`);
    $(eles).addClass("playHovered");
  }
  removeHover() {
    let eles = document.getElementById(`playButton${this.props.album.id}`);
    $(eles).removeClass("playHovered");
  }
  addPauseHover() {
    // debugger
    let eles = document.getElementById(`pauseButton`);
    $(eles).addClass("playHovered");
  }
  removePauseHover() {
    let eles = document.getElementById(`pauseButton`);
    $(eles).removeClass("playHovered");
  }
  removeClass() {
      let ele = document.getElementById(`play${this.props.album.id}`);
      $(ele).removeClass("visibleButton");
  }
  render() {
    const { album } = this.props;

    if (!album) {
      return null;

    } else {
      debugger
      return (
        <div className="songBoundaries">
          <li className="album" >
            <Link to={`/albums/${album.id}`} id={`pic${album.id}`}><img className="albumArt" src={album.photoUrl} /></Link>
            <Link to={`/albums/${album.id}`} className="albumTitle">{album.title}</Link>
            <Link to={`/artists/${album.artist.id}`} className="albumArtist">{album.artist.username}</Link>
            <button className="playSong" id={`play${album.id}`} onClick={this.playSong}>
              {(this.state.playing) ? 
                <i className="fas fa-pause-circle" id={`pauseButton`}></i>
              : 
                <i className="fas fa-play-circle" id={`playButton${album.id}`}></i>
              }
            </button>
          </li>
        </div>
      )
    }
  }
}

export default Album;