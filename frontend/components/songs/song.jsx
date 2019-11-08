import React from 'react';

const Song = ({type, num, song, users}) => {
  let artist;

  for (let i = 0; i < users.length; i++) {
    if(users[i].id === song.user_id) {
      artist = users[i];
      break;
    } 
  }

  return(
    <div className="songBoundaries">
      <li className="song">
        <p>{song.title}</p>
        <p>{artist.username}</p>
        <p>{song.album}</p>
      </li>
    </div>
  )
}

export default Song;