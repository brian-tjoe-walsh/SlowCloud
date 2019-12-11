import React from 'react';
import { Link } from 'react-router-dom';

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: this.props.album,
      artist: this.props.album.artist,
      hover: null
    };
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.addHover = this.addHover.bind(this);
    this.removeHover = this.removeHover.bind(this);
    this.playSong = this.playSong.bind(this);
  }

  playSong() {
    let play = this.state.album.songs[0];
    this.props.addSong(play);
      // .then((res) => {debugger});
  }

  componentDidMount() {
    let ele = document.getElementById(`pic${this.state.album.id}`);
    ele.addEventListener("mouseover", this.addClass);
    ele.addEventListener("mouseleave", this.removeClass);
    let button = document.getElementById(`play${this.state.album.id}`);
    button.addEventListener("mouseover", this.addClass);
    button.addEventListener("mouseover", this.addHover);
    button.addEventListener("mouseleave", this.removeClass);
    button.addEventListener("mouseleave", this.removeHover);
  }
  
  addClass() {
    let ele = document.getElementById(`play${this.state.album.id}`);
    $(ele).addClass("visibleButton");
  }
  addHover() {
    let eles = document.getElementById(`playButton${this.state.album.id}`);
    $(eles).addClass("playHovered");
  }
  removeHover() {
    let eles = document.getElementById(`playButton${this.state.album.id}`);
    $(eles).removeClass("playHovered");
  }
  removeClass() {
      let ele = document.getElementById(`play${this.state.album.id}`);
      $(ele).removeClass("visibleButton");
  }
  render() {
    const {album, artist} = this.state;

    if (!album) {
      return null;

    } else {
      
      return (
        <div className="songBoundaries">
          <li className="album" >
            <Link to={`/albums/${album.id}`} id={`pic${album.id}`}><img className="albumArt" src={album.photoUrl} /></Link>
            <Link to={`/albums/${album.id}`} className="albumTitle">{album.title}</Link>
            <Link to={`/artists/${album.artist.id}`} className="albumArtist">{artist.username}</Link>
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