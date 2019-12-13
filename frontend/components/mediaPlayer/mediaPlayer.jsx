import React from 'react';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = { 
      state: this.props.state,
      songs: null,
      playing: false,
      currentSong: null,
      currentTime: null,
      totalTime: null,
      eventListener: false };
    this.filter = this.props.filter;
    this.currentSong = null;
    this.play = this.play.bind(this);
    this.getTime = this.getTime.bind(this);
  }

  componentDidMount() {
    if (!this.state.songs) {
      this.props.fetchSongs()
        .then( (res) => this.setState({ songs: res.songs }));
    }
  }

  componentDidUpdate() {
    debugger
    let currentSong = null;
    
    // = this.props.state.ui.mediaPlayer.songs[0];
    if (Object.values(this.props.state.ui.mediaPlayer).length > 0 && this.props.state.ui.mediaPlayer.songs[0]) {
      currentSong = this.props.state.ui.mediaPlayer.songs[0];
    } 

    if (currentSong) {
      if (this.state.currentSong) {
        if (this.state.currentSong.id !== currentSong.id) {
          this.setState({
            currentSong: currentSong,
            playing: true
          });
        }
      } else {
        this.setState({
          currentSong: currentSong,
          playing: true
        });
      }
    }

    if (this.props.state.ui.mediaPlayer.playing) {
      this.play();
    } else if (this.props.state.ui.mediaPlayer.playing === false) {
      this.pause();
    }

    if (document.getElementById('media')) {
      // debugger

      if (!this.state.eventListener) {
        let mediaPlayer = document.getElementById('media');
        let juice = document.getElementsByClassName('pink-juice');
        mediaPlayer.addEventListener('timeupdate', () => {
          // debugger
          let juicePos = mediaPlayer.currentTime / mediaPlayer.duration;
          let currentTime = document.getElementsByClassName('mediaCurrentTime');
          juice[0].style.width = juicePos * 100 + "%";

          // debugger
          let time = Math.floor(mediaPlayer.currentTime);
          currentTime[0].innerHTML = this.getTime(time);
         

          let remainingTime = document.getElementsByClassName('mediaRemainingTime');
          time = Math.floor(mediaPlayer.duration) - Math.floor(mediaPlayer.currentTime);
          // debugger
          remainingTime[0].innerHTML = this.getTime(time);
        });

        this.setState({eventListener: true});
      } 
    }
  }

  getTime(time) {
    let mins;
    let seconds;
    
    if (Number.isInteger(time)) {
      if (time < 10) {
        return(`0:0${time}`);
      } else if (time < 60) {
        return(`0:${time}`);
      } else {
        mins = Math.floor(time / 60);
        seconds = Math.floor(time - (mins * 60));
        if (seconds < 10) {
          seconds = `0${seconds}`;
          return(`${mins}:${seconds}`);
        } else {
          return(`${mins}:${seconds}`);
        }
      }
    }
  }

  play() {
    // debugger
    let player = document.getElementById("media");
    // player.load();
    player.play();
  }

  pause() {
    // debugger
    let player = document.getElementById("media");
    player.pause();

  }

  clicked() {
    debugger
  }

  currentTime() {
    let player = document.getElementById("media");
    this.setState({currentTime: player.currentTime});
  }
  
  
  render() {

    if (!this.state.songs) {

      return(
        <div className="mediaBar" onClick={this.clicked}>
          <div className="loader" id="mediaLoader"></div>
        </div>
      )

    } else {
      let currentSong = null;
      // debugger
    
      if (this.currentSong) {
        currentSong = this.currentSong;
      } 
      else {
        // debugger
        currentSong = Object.values(this.state.songs)[102];
      }

      if (!currentSong.audio_fileUrl) {
        // debugger
        currentSong = Object.values(this.state.songs)[102];
      }

      return (
        <div className="mediaBar" onClick={this.clicked}>
          <audio className="mediaPlayer" id="media" controls width="100%" height="50px">
              <source src={currentSong.audio_fileUrl} />
          </audio>
          <div className="mediaControls">

            <button className="mediaBack">
              <i className="fas fa-step-backward" id="mediaBack"></i>
            </button>

            <button className="mediaPlay">
              {(this.props.state.ui.mediaPlayer.playing) ? 
              <i className="fas fa-pause" id="mediaPause"></i>
              :
              <i className="fas fa-play" id="mediaPlay"></i>
              }
            </button>

            <button className="mediaForward">
              <i className="fas fa-step-forward" id="mediaForward"></i>
            </button>

            <button className="mediaRepeat">
              <i className="fas fa-redo-alt" id="mediaRepeat"></i>
            </button>
          </div>
          <div className="mediaProgress">
            <div className="mediaCurrentTime">
              {(this.state.currentTime)}
            </div>
            <div className="pink-bar">
              <div className="pink-juice"></div>
            </div>
            <div className="mediaRemainingTime">
              {(this.state.totalTime)}
            </div>
            
          </div>
          <div className="mediaDescription">

          </div>


        </div>
      )
    }
  }
}

export default MediaPlayer;