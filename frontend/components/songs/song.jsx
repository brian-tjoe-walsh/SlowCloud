import React from 'react';

const Song = ({song, users}) => {
  let artist;

  for (let i = 0; i < users.length; i++) {
    if(users[i].id === song.user_id) {
      artist = users[i];
    } 
  }

  return(
    <li className="song">
      <p>{song.title}</p>
      <p>{artist.username}</p>
      <p>{song.album}</p>
      <p>{song.genre}</p>
    </li>
  )
}

export default Song;