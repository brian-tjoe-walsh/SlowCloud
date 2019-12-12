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
  }

  playSong() {
    let play = this.props.album.songs[0];
    this.props.addSong(play);
  }

  componentDidMount() {
    let ele = document.getElementById(`pic${this.props.album.id}`);
    ele.addEventListener("mouseover", this.addClass);
    ele.addEventListener("mouseleave", this.removeClass);
    let button = document.getElementById(`play${this.props.album.id}`);
    button.addEventListener("mouseover", this.addClass);
    button.addEventListener("mouseover", this.addHover);
    button.addEventListener("mouseleave", this.removeClass);
    button.addEventListener("mouseleave", this.removeHover);
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
  removeClass() {
      let ele = document.getElementById(`play${this.props.album.id}`);
      $(ele).removeClass("visibleButton");
  }
  render() {
    const { album } = this.props;

    if (!album) {
      return null;

    } else {
      // debugger
      return (
        <div className="songBoundaries">
          <li className="album" >
            <Link to={`/albums/${album.id}`} id={`pic${album.id}`}><img className="albumArt" src={album.photoUrl} /></Link>
            <Link to={`/albums/${album.id}`} className="albumTitle">{album.title}</Link>
            <Link to={`/artists/${album.artist.id}`} className="albumArtist">{album.artist.username}</Link>
            <button className="playSong" id={`play${album.id}`} onClick={this.playSong}>
              <i className="fas fa-play-circle" id={`playButton${album.id}`}></i>
            </button>
          </li>
        </div>
      )
    }
  }
}

export default Album;