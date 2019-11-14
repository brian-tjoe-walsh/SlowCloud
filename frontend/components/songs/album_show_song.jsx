import React from 'react';

const AlbumShowSong = ({ index, song, album }) => {
  // debugger
  return(
    <div className="albumShowSong">
      <img className="albumShowMiniPic" src={album.photoUrl}/>
      <div className="albumSpread">
        <div className="albumShowText">
          {index + 1}
        
          <div className="albumShowTitle">
            {song.title}  
          </div>
        </div>
        <div className="albumShowTitleRightSide">
          <i className="fas fa-play"></i>
          <div className="playCount">{500}</div>
        </div>
      </div>
    </div>
  )
};

export default AlbumShowSong;