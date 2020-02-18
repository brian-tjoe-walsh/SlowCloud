import React from 'react';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = { 
      state: this.props.state,
      songs: null,
      playing: false,
      player: null,
      currentSong: null,
      currentTime: null,
      totalTime: null,
      eventListener: false };
    this.filter = this.props.filter;
    this.player = null;
    this.currentSong = null;
    this.play = this.play.bind(this);
    this.getTime = this.getTime.bind(this);
    this.clicked = this.clicked.bind(this);
    this.clicking = this.clicking.bind(this);
    this.speedUp = this.speedUp.bind(this);
    this.findX = this.findX.bind(this);
  }

  componentDidMount() {
    if (!this.state.songs) {
      this.props.fetchSongs()
        .then( (res) => this.setState({ songs: res.songs }));
    }
  }

  componentDidUpdate() {
    let currentSong = null;
    
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
    if (this.state.player || document.getElementById('media') ) {
      if (!this.state.player) {
        this.setState({ player: document.getElementById('media')});
      }

      if (this.state.player && !this.state.eventListener) {
        let mediaPlayer = this.state.player;
        let juice = document.getElementsByClassName('pink-juice');
        mediaPlayer.addEventListener('timeupdate', () => {
          let juicePos = mediaPlayer.currentTime / mediaPlayer.duration;
          let currentTime = document.getElementsByClassName('mediaCurrentTime');
          juice[0].style.width = juicePos * 100 + "%";

          let time = Math.floor(mediaPlayer.currentTime);
          currentTime[0].innerHTML = this.getTime(time);
         

          let remainingTime = document.getElementsByClassName('mediaRemainingTime');
          time = Math.floor(mediaPlayer.duration) - Math.floor(mediaPlayer.currentTime);
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
    let currentSong = null;

    if (this.state.currentSong) {
      currentSong = this.state.songs[this.state.currentSong.id]
    }
    else {
      currentSong = Object.values(this.state.songs)[102];
    }

    if (!currentSong.audio_fileUrl) {
      currentSong = Object.values(this.state.songs)[102];
    }

    let player = document.getElementById("media");
    player.play();
  }

  pause() {
    let player = document.getElementById("media");
    player.pause();

  }

  clicked() {
    if (this.props.state.ui.mediaPlayer.playing) {
      this.play();
    } else {
      this.pause();
    }
  }

  currentTime() {
    let player = document.getElementById("media");
    this.setState({currentTime: player.currentTime});
  }
  
  clicking() {
    if (this.props.state.ui.mediaPlayer.playing) {
      this.props.pauseSong();
    } else {
      this.props.playSong();
    }
  }

  findX(e) {
    let bar = document.getElementsByClassName("pink-bar")[0];
    let offset = e.clientX - bar.getClientRects()[0].x;
    
    if (offset < 0) {
      return 0;
    } else if (offset > 500) {
      return 1;
    } else {
      return offset / 500;
    }
  }
  

  speedUp(e) {
    e.preventDefault();
    let offset = this.findX(e);
    offset = offset * this.state.player.duration;
    this.state.player.currentTime = offset;

    // let mediaPlayer = document.getElementsByClassName('mediaCurrentTime')[0];
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
    
      if (this.state.currentSong) {
        currentSong = this.state.songs[this.state.currentSong.id]
      } 
      else {
        currentSong = Object.values(this.state.songs)[102];
      }
      
      if (!currentSong.audio_fileUrl) {
        currentSong = Object.values(this.state.songs)[102];
      }
      
      return (
        <div className="mediaBar" onClick={this.clicked}>
          <audio src={currentSong.audio_fileUrl} className="mediaPlayer" id="media" controls width="100%" height="50px"></audio>
          
          <div className="mediaControls">

            <button className="mediaBack">
              <i className="fas fa-step-backward" id="mediaBack"></i>
            </button>

            <button className="mediaPlay" onClick={this.clicking}>
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
            <div className="pink-bar" onClick={this.speedUp}>
              <div className="pink-juice"></div>
            </div>
            <div className="mediaRemainingTime">
              {(this.state.totalTime) ? (this.state.totalTime) : (null)}
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