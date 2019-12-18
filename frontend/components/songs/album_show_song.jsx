import React from 'react';

class AlbumShowSong extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentSong: null,
      playing: false};
    this.playSong = this.playSong.bind(this);
    this.afterClick = this.afterClick.bind(this);
  }

  componentDidMount() {
    debugger
    window.scrollTo(0, 0);

    if (Object.values(this.props.state.ui.mediaPlayer).length > 0 &&
      this.props.state.ui.mediaPlayer.songs[0]) {

      if (this.props.state.ui.mediaPlayer.playing && this.props.state.ui.mediaPlayer.songs[0].id === this.props.song.id) {
        let song = document.getElementById(`albumShowSong${this.props.song.id}`);
        let text = document.getElementById(`albumShowText${this.props.song.id}`);
        let title = document.getElementById(`albumShowTitle${this.props.song.id}`);

        $(song).addClass(`albumShowSongPlaying`);
        $(text).addClass(`albumShowSongPlaying`);
        $(title).addClass(`albumShowSongPlaying`);
        
        this.setState({
          currentSong: this.props.state.ui.mediaPlayer.songs[0],
          playing: true
        });
      } else if (!this.props.state.ui.mediaPlayer.playing && this.props.state.ui.mediaPlayer.songs[0].id === this.props.song.id) {
        this.setState({
          currentSong: this.props.state.ui.mediaPlayer.songs[0]
        });
      }
    }
  }

  componentDidUpdate() {
    if (Object.values(this.props.state.ui.mediaPlayer).length > 0 &&
      this.props.state.ui.mediaPlayer.songs[0]) {
      if (this.props.state.ui.mediaPlayer.songs[0].id === this.props.song.id) {
        debugger
        let song = document.getElementById(`albumShowSong${this.props.song.id}`);
        let text = document.getElementById(`albumShowText${this.props.song.id}`);
        let title = document.getElementById(`albumShowTitle${this.props.song.id}`);

        if (this.props.state.ui.mediaPlayer.playing && !this.state.playing) {
          $(song).addClass(`albumShowSongPlaying`);
          $(text).addClass(`albumShowSongPlaying`);
          $(title).addClass(`albumShowSongPlaying`);
          this.setState({
            playing: true
          });
        } else if (!this.props.state.ui.mediaPlayer.playing && this.state.playing) {
          $(song).removeClass(`albumShowSongPlaying`);
          $(text).removeClass(`albumShowSongPlaying`);
          $(title).removeClass(`albumShowSongPlaying`);
          this.setState({
            playing: false
          });
        } else if (!this.state.currentSong) {
          this.setState({
            currentSong: this.props.album
          });
        }
      } else {
        debugger
        let song = document.getElementById(`albumShowSong${this.props.song.id}`);
        let text = document.getElementById(`albumShowText${this.props.song.id}`);
        let title = document.getElementById(`albumShowTitle${this.props.song.id}`);

        $(song).removeClass(`albumShowSongPlaying`);
        $(text).removeClass(`albumShowSongPlaying`);
        $(title).removeClass(`albumShowSongPlaying`);

      }
    } else {
      null;
    }
  }

  playSong() {
    let player = document.getElementById("media");
    // let button = document.getElementById(`play${this.props.album.id}`);

    debugger
    if (!this.state.currentSong || this.state.currentSong.id !== this.props.state.ui.mediaPlayer.songs[0].id) {
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
      let song = document.getElementById(`albumShowSong${this.props.song.id}`);
      let text = document.getElementById(`albumShowText${this.props.song.id}`);
      let title = document.getElementById(`albumShowTitle${this.props.song.id}`);
      $(song).addClass(`albumShowSongPlaying`);
      $(text).addClass(`albumShowSongPlaying`);
      $(title).addClass(`albumShowSongPlaying`);

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
      let song = document.getElementById(`albumShowSong${this.props.song.id}`);
      let text = document.getElementById(`albumShowText${this.props.song.id}`);
      let title = document.getElementById(`albumShowTitle${this.props.song.id}`);
      $(song).removeClass(`albumShowSongPlaying`);
      $(text).removeClass(`albumShowSongPlaying`);
      $(title).removeClass(`albumShowSongPlaying`);

        this.setState({ playing: false });
      }

    // }
  }

  render() {
    const { album } = this.props;

    return(
      <div className="albumShowSong" id={`albumShowSong${this.props.song.id}`} onClick={this.playSong}>
        <div className="albumSongPic">
          <img className="albumShowMiniPic" src={this.props.album.photoUrl}/>
        </div>
        <div className="albumSpread">
          <div className="albumShowText" id={`albumShowText${this.props.song.id}`}>
            {this.props.index + 1}
          
            <div className="albumShowTitle">
              {this.props.song.title}  
            </div>
          </div>
          <div className="albumShowTitleRightSide" id={`albumShowTitle${this.props.song.id}`}>
            <i className="fas fa-play"></i>
            <div className="playCount">{500}</div>
          </div>
        </div>
      </div>
    )
  }
};

export default AlbumShowSong;