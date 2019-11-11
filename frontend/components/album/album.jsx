import React from 'react';
import Songs from '../songs/songs_container';
import { Link, Redirect } from 'react-router-dom';

const Album = ({ type, num, album, users }) => {
  let artist;
  // debugger

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === album.user_id) {
      artist = users[i];
      break;
    }
  }


  return (
    <div className="songBoundaries">
      <li className="album" onClick={() => <Redirect to={`/albums/${num}`} />}>
        <Link to={`/albums/${num}`}><img className="albumArt" src={album.photoUrl} /></Link>
        <Link to={`/albums/${num}`} className="albumTitle">{album.title}</Link>
        <Link to={`/albums/${num}`} className="albumArtist">{artist.username}</Link>
        {/* <p>{album.title}</p> */}
      </li>
    </div>
  )
}

export default Album;