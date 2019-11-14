import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Modal from '../modals/modal_container';
import NavBarContainer from '../navbar/navbar_container';

class Listening extends React.Component {

  getRandom() {
    let indices = [];
    let num;

    while (indices.length < 3) {
      num = Math.floor(Math.random() * this.props.albums.length);

      if (!indices.includes(this.props.albums[num])) {
        indices.push(this.props.albums[num]);
      }
    }
    
    return indices;
  }


  render() {
    let indices = this.getRandom();
    debugger
    return (
      <div>
       <div className="listeningAlbums">
        {indices.map((album) => (
          <div className="listeningAlbum">
            <Link to={`/artists/${album.artist.id}`}><img className="listeningPhoto" src={album.photoUrl} /></Link>
            <div className="listeningTitles">
              <Link to={`/artists/${album.artist.id}`} className="listeningAlbumArtist">{album.artist.username}</Link>
              <Link to= {`/albums/${album.id}`}className="listeningAlbumTitle">{album.title}</Link>
            </div>
          </div>
        ))}
       </div>
       
      </div>
    );
  }

}

export default Listening;