import React from 'react';
import Songs from '../songs/songs_container';
import { Link, Redirect } from 'react-router-dom';

const Album = ({ type, num, user }) => {

  return (
    <div className="songBoundaries">
      <li className="album" onClick={() => <Redirect to={`/albums/${num}`} />}>
        <Link to={`/artists/${num}`}><img className="artistArt" src={user.photoUrl} /></Link>
        <Link to={`/artists/${num}`} className="albumTitle">{user.username}</Link>
        {/* <p>{album.title}</p> */}
      </li>
    </div>
  )
}

export default Album;