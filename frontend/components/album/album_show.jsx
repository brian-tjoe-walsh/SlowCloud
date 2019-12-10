import React from 'react';
import Songs from '../songs/songs_container';
import { Link, Redirect } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import AlbumShowSong from '../songs/album_show_song';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.state.entities.users[this.props.state.session.id];
    debugger
    this.state = {album: "hello",
                  artist: "null"};
  }

  componentDidMount() {
    debugger 

    this.props.fetchAlbum(this.props.albumId)
      .then((res) => this.setState({
        album: res.album,
        artist: res.album.artist
        }
      ));
  }

  render() {
    // const { artist, album } = this.state;
    const { album } = this.state;
    const { artist } = this.state;
    const loc = { url: "/album" };
    let profilePic;

    debugger
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
                    <i className="fas fa-play-circle"></i>

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
                      {this.state.album.songs.map( (song, index) => <AlbumShowSong key={index} index={index} song={song} album={this.state.album}/>)}
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