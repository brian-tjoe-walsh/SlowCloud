import React from 'react';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = { 
      state: this.props.state,
      songs: null,
      currentSong: null };
    this.filter = this.props.filter;
    this.currentSong = null;
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    if (!this.state.songs) {
      this.props.fetchSongs()
        .then( (res) => this.setState({ songs: res.songs }));
    }
  }

  componentDidUpdate() {
    // debugger
    let currentSong = this.props.state.ui.mediaPlayer[0];

    if (currentSong) {
      if (this.currentSong) {
        if (this.currentSong.id !== currentSong.id) {
          this.currentSong = currentSong;
          this.play();
        }
      } else {
        this.currentSong = currentSong;
        this.play();
      }
    }
  }

  play() {
    // debugger
    let player = document.getElementById("media");
    player.load();
    player.play();

  }
  
  
  render() {

    if (!this.state.songs) {

      return null;

    } else {
      let currentSong;
    
      if (this.currentSong) {
        currentSong = this.currentSong;
      } else {
        currentSong = Object.values(this.state.songs)[101];
      }

      if (!currentSong.audio_fileUrl) {
        currentSong = Object.values(this.state.songs)[101];
      }

      debugger

      console.log(currentSong);

      return (
        <div className="mediaBar">
          <audio className="mediaPlayer" id="media" controls width="100%" height="50px">
          <source src={currentSong.audio_fileUrl} />
          </audio>
        </div>
      )
    }
  }
}

export default MediaPlayer;