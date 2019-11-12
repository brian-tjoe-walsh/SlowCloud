import React from 'react';
import Songs from '../songs/songs_container';
import { Link, Redirect } from 'react-router-dom';

const Album = ({ type, num, user }) => {

  return (
    <div className="songBoundaries">
      <li className="album" >
        <Link to={`/artists/${user.id}`}><img className="artistArt" src={user.photoUrl} /></Link>
        <Link to={`/artists/${user.id}`} className="albumTitle">{user.username}</Link>
      </li>
    </div>
  )
}

export default Album;