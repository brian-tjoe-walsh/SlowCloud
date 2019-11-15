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
    let indices = [this.props.albums[17], this.props.albums[27], this.props.albums[42]];
    debugger
    return (
      <div className="listeningBox">
       <div className="listeningAlbums">
        {indices.map((album) => (
          <div key={album.id} className="listeningAlbum">
            <Link to={`/artists/${album.artist.id}`}><img className="listeningPhoto" src={album.photoUrl} /></Link>
            <div className="listeningTitles">
              <Link to={`/artists/${album.artist.id}`} className="listeningAlbumArtist">{album.artist.username}</Link>
              <Link to= {`/albums/${album.id}`}className="listeningAlbumTitle">{album.title}</Link>
            </div>
          </div>
        ))}
       </div>
       <div className="shamelessPlug">
          <a href="https://www.linkedin.com/in/brian-tjoe-walsh-89086991/"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/bbriannwalshh"><i className="fab fa-github"></i></a>
       </div>
      </div>
    );
  }

}

export default Listening;