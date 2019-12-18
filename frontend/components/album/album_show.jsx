import React from 'react';
import Songs from '../songs/songs_container';
import { Link, Redirect } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import AlbumShowSong from '../songs/album_show_song';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.state.entities.users[this.props.state.session.id];
    this.state = {
      album: "hello",           
      artist: "null",
      currentSong: null,
      playing: false
    };

    this.playSong = this.playSong.bind(this);
    this.afterClick = this.afterClick.bind(this);
    this.addHover = this.addHover.bind(this);
    this.removeHover = this.removeHover.bind(this);
    this.addPauseHover = this.addPauseHover.bind(this);
    this.removePauseHover = this.removePauseHover.bind(this);
  }

  componentDidMount() {
    // debugger
    window.scrollTo(0, 0);

    let id = +this.props.albumId - 1;

    if (this.props.state.entities.albums[id]) {
      this.setState({
        album: this.props.state.entities.albums[id],
        artist: this.props.state.entities.albums[id].artist
      });
    } else {
      this.props.fetchAlbum(this.props.albumId)
        .then((res) => this.setState({
          album: res.album,
          artist: res.album.artist
          }
        ));
    }
    if (Object.values(this.props.state.ui.mediaPlayer).length > 0 &&
      this.props.state.ui.mediaPlayer.songs[0]) {

        if (this.props.state.ui.mediaPlayer.playing && this.props.state.ui.mediaPlayer.songs[0].album_id === this.props.album.id) {
          this.setState({
            currentSong: this.props.state.ui.mediaPlayer.songs[0],
            playing: true
          });
        } else if (!this.props.state.ui.mediaPlayer.playing && this.props.state.ui.mediaPlayer.songs[0].album_id === this.props.album.id) {
          this.setState({
            currentSong: this.props.state.ui.mediaPlayer.songs[0]
          });
        }
    }
  }

  componentDidUpdate() {
    let button = document.getElementById(`albumPlayButton`);

    debugger

    if (button) {
      if (Object.values(this.props.state.ui.mediaPlayer).length > 0 &&
        this.props.state.ui.mediaPlayer.songs[0]) {
        if (this.props.state.ui.mediaPlayer.songs[0].album_id === this.state.album.id) {
          // debugger
          button.removeEventListener("mouseover", this.addHover);
          button.removeEventListener("mouseleave", this.removeHover);
          button.addEventListener("mouseover", this.addPauseHover);
          button.addEventListener("mouseleave", this.removePauseHover);
  
          if (this.props.state.ui.mediaPlayer.playing && !this.state.playing) {
            this.setState({
              playing: true
            });
          } else if (!this.props.state.ui.mediaPlayer.playing && this.state.playing) {
            this.setState({
              playing: false
            });
          } else if (!this.state.currentSong) {
            this.setState({
              currentSong: this.props.album
            });
          }
        } else {
          button.removeEventListener("mouseover", this.addPauseHover);
          button.removeEventListener("mouseleave", this.removePauseHover);
          button.addEventListener("mouseover", this.addHover);
          button.addEventListener("mouseleave", this.removeHover);
        }
      } else {
        button.removeEventListener("mouseover", this.addPauseHover);
        button.removeEventListener("mouseleave", this.removePauseHover);
        button.addEventListener("mouseover", this.addHover);
        button.addEventListener("mouseleave", this.removeHover);
      }
    }


    
    // let button = document.getElementById(`albumPlayButton`);
    // if (button) {
    //   if (this.state.currentSong && this.state.playing) {
    //     button.removeEventListener("mouseover", this.addHover);
    //     button.removeEventListener("mouseleave", this.removeHover);
    //     button.addEventListener("mouseover", this.addPauseHover);
    //     button.addEventListener("mouseleave", this.removePauseHover);
    //   } else { 
    //     debugger
    //     button.removeEventListener("mouseover", this.addPauseHover);
    //     button.removeEventListener("mouseleave", this.removePauseHover);
    //     button.addEventListener("mouseover", this.addHover);
    //     button.addEventListener("mouseleave", this.removeHover);
    //   }
    // }
  }

  addHover() {
    let eles = document.getElementById(`albumPlayButton`);
    $(eles).addClass("playHovered");
  }
  removeHover() {
    let eles = document.getElementById(`albumPlayButton`);
    $(eles).removeClass("playHovered");
  }
  addPauseHover() {
    // debugger
    let eles = document.getElementById(`albumPlayButton`);
    $(eles).addClass("playHovered");
  }
  removePauseHover() {
    let eles = document.getElementById(`albumPlayButton`);
    $(eles).removeClass("playHovered");
  }

  playSong() {
    let player = document.getElementById("media");
    let button = document.getElementById(`albumPlayButton`);

    debugger
    if (!this.state.currentSong) {
      let play = this.state.album.songs[0];
      if (this.props.state.ui.mediaPlayer.songs) {
        // debugger
        this.props.deleteSong(this.props.state.ui.mediaPlayer.songs[0]);
        this.props.pauseSong();
        player.pause();
      }
      this.props.addSong(play);
      let visible = document.getElementsByClassName("visibleButton");
      $(visible).removeClass("visibleButton");
      $(button).addClass("visibleButton");
      this.setState({
        currentSong: true,
        playing: true
      });
    }
    this.afterClick(player);
  }

  afterClick(player) {
    // debugger
    if (player.paused) {
      this.props.playSong();
      let button = document.getElementById(`albumPlayButton`);
      button.removeEventListener("mouseover", this.addHover);
      button.removeEventListener("mouseleave", this.removeHover);
      button.addEventListener("mouseover", this.addPauseHover);
      button.addEventListener("mouseleave", this.removePauseHover);

      this.setState({ playing: true });

    } else {
      this.props.pauseSong();
      let button = document.getElementById(`albumPlayButton`);
      button.removeEventListener("mouseover", this.addPauseHover);
      button.removeEventListener("mouseleave", this.removePauseHover);
      button.addEventListener("mouseover", this.addHover);
      button.addEventListener("mouseleave", this.removeHover);
      this.setState({ playing: false });

    }
  }

  render() {
    // const { artist, album } = this.state;
    const { album } = this.state;
    const { artist } = this.state;
    const loc = { url: "/album" };
    let profilePic;

    if (this.currentUser) {
      profilePic = this.currentUser.photoUrl;
    } else {
      profilePic = null;
    }


    if (this.state.album === "hello") {
      return (<div>
        <NavBarContainer loc={loc} />
      </div>)
    } else {
      debugger
      return (
        <div>
          <NavBarContainer loc={loc} />
          <div className="showFlexing">
            <div className="showMidPage">
                <div className="songBanner">
                  <div className="bannerLeft">
                    <button className="albumPlaySong" id={`play${album.id}`} onClick={this.playSong}>
                      {(this.state.playing) ?
                        <i className="fas fa-pause-circle" id={`albumPlayButton`}></i>
                        :
                        <i className="fas fa-play-circle" id={`albumPlayButton`}></i>
                      }
                    </button>

                    <div className="showTitles">
                      <div className="showArtist">
                        <Link to={`/artists/${artist.id}`}className="showArtist">{artist.username}</Link>
                      </div>
                      
                      <div className="showTrack">
                        <p className="showTrack">{album.title}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bannerRight">
                    <img className="albumArtLarge" src={album.photoUrl} />
                  </div>
                </div>

                <div className="albumShowLeftAndRight">
                  <div className="albumShowMidLeft">
                    <div className="addComment">
                    <img className="albumShowMiniProfPic" src={profilePic} />
                      <input type="text" className="addingComment"placeholder="Write a comment"/>
                    </div>
                    <div className="albumShowTracklist">
                      {Object.values(this.state.album.songs).map( (song, index) => <AlbumShowSong 
                        key={index} 
                        index={index} 
                        song={song} 
                        album={this.state.album}
                        state={this.props.state}
                        addSong={this.props.addSong}
                        playSong={this.props.playSong}
                        deleteSong={this.props.deleteSong}
                        pauseSong={this.props.pauseSong}/>)}
                    </div>
                  </div>
                  
                  <div className="albumShowMidRight">
                    <div className="showMidRightCont">
                      Songs
                        <div className="showMidRightNum">
                        {this.state.album.songs.length}
                      </div>
                    </div>
                    <div className="shamelessPlug">
                      <a href="https://www.linkedin.com/in/brian-tjoe-walsh-89086991/"><i className="fab fa-linkedin"></i></a>
                      <a href="https://github.com/bbriannwalshh"><i className="fab fa-github"></i></a>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      )
    }
  }
}

export default AlbumShow;