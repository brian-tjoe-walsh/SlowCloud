import React from 'react';

const Song = ({type, num, song, users, albums}) => {
  let artist;
  let album;
  // debugger

  for (let i = 0; i < users.length; i++) {
    if(users[i].id === song.user_id) {
      artist = users[i];
      break;
    } 
  }

  for (let i = 0; i < albums.length; i++) {
    if (albums[i].id === song.album_id) {
      album = albums[i];
    }
  }

  return(
    <div className="songBoundaries">
      <li className="song">
        <img className="albumArt" src={album.photoUrl}/>
        <p className="songTitle">{song.title}</p>
        <p className="songArtist">{artist.username}</p>
        {/* <p>{album.title}</p> */}
      </li>
    </div>
  )
}

export default Song;