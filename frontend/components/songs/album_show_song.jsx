import React from 'react';

class AlbumShowSong extends React.Component {
  
  constructor(props) {
    super(props);
    this.state= {
      currentSong: null,
      playing: false};
    this.playSong = this.playSong.bind(this);
    this.afterClick = this.afterClick.bind(this);
  }

  playSong() {
    let player = document.getElementById("media");
    // let button = document.getElementById(`play${this.props.album.id}`);

    debugger
    if (!this.state.currentSong) {
      let play = this.props.state.entities.songs[this.props.song.id];
      if (this.props.state.ui.mediaPlayer.songs) {
        debugger
        this.props.deleteSong(this.props.state.ui.mediaPlayer.songs[0]);
        this.props.pauseSong();
        player.pause();
      }
      this.props.addSong(play);
      // let visible = document.getElementsByClassName("visibleButton");
      // $(visible).removeClass("visibleButton");
      // $(button).addClass("visibleButton");
      this.setState({
        currentSong: play,
        playing: true
      });
    }
    debugger
    this.afterClick(player);
  }

  afterClick(player) {
    debugger
    if (player.paused) {
      this.props.playSong();
      // let ele = document.getElementById(`pic${this.props.album.id}`);
      // ele.removeEventListener("mouseover", this.addClass);
      // ele.removeEventListener("mouseleave", this.removeClass);
      // let button = document.getElementById(`play${this.props.album.id}`);
      // button.removeEventListener("mouseover", this.addClass);
      // button.removeEventListener("mouseleave", this.removeClass);
      // button.addEventListener("mouseover", this.addPauseHover);
      // button.addEventListener("mouseleave", this.removePauseHover);

      // $(button).addClass("visibleButton");
      this.setState({ playing: true });

    } else {
      debugger
        this.props.pauseSong();
        // let ele = document.getElementById(`pic${this.props.album.id}`);
        // ele.addEventListener("mouseover", this.addClass);
        // ele.addEventListener("mouseleave", this.removeClass);
        // let button = document.getElementById(`play${this.props.album.id}`);
        // $(button).removeClass("visibleButton");
        // button.addEventListener("mouseover", this.addClass);
        // button.addEventListener("mouseleave", this.removeClass);
        // button.removeEventListener("mouseover", this.addPauseHover);
        // button.removeEventListener("mouseleave", this.removePauseHover);
        this.setState({ playing: false });
      }

    // }
  }

  render() {
    return(
      <div className="albumShowSong" onClick={this.playSong}>
        <img className="albumShowMiniPic" src={this.props.album.photoUrl}/>
        <div className="albumSpread">
          <div className="albumShowText">
            {this.props.index + 1}
          
            <div className="albumShowTitle">
              {this.props.song.title}  
            </div>
          </div>
          <div className="albumShowTitleRightSide">
            <i className="fas fa-play"></i>
            <div className="playCount">{500}</div>
          </div>
        </div>
      </div>
    )
  }
};

export default AlbumShowSong;