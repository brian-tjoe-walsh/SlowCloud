import React from 'react';
import { Link } from 'react-router-dom';

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: this.props.album,
      artist: this.props.album.artist};
  }

  render() {
    const {album, artist} = this.state;
    
    if (!album) {
      return null;

    } else {
      
      return (
        <div className="songBoundaries">
          <li className="album" >
            <Link to={`/albums/${album.id}`}><img className="albumArt" src={album.photoUrl} /></Link>
            <Link to={`/albums/${album.id}`} className="albumTitle">{album.title}</Link>
            <Link to={`/artists/${album.artist.id}`} className="albumArtist">{artist.username}</Link>
          </li>
        </div>
      )
    }
  }
}

export default Album;