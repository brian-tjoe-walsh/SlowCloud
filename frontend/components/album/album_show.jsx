import React from 'react';
import Songs from '../songs/songs_container';
import NavBarContainer from '../navbar/navbar_container';
import MediaPlayer from '../mediaPlayer/mediaPlayer_container';
import { Link, Redirect } from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {album: "hello"};
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchAlbums()
      .then(this.setState({ album: this.props.albums[this.props.albumId] }));

  }

  componentDidUpdate(prevProps) {
    if (prevProps.albumId !== this.props.albumId) {
      this.props.fetchUsers();
      this.props.fetchAlbums()
        .then(this.setState({ album: this.props.albums[this.props.albumId] }));
    }
  }

  getArtist() {
    let artist = {};

    if (!this.state.album.user_id) {
      this.setState({ album: this.props.albums[this.props.albumId] })
    }

    this.props.users.forEach( (user, index) => {
      if (user.id === this.state.album.user_id) {
        artist[index] = user;
      }
    });

    return artist; 
  }


  render() {
    const { users, albums } = this.props;
    const loc = { url: "/library" };


    if (this.state.album === "hello") {
      return null;
    } else {
      let artistObj = this.getArtist();
      let index = Object.keys(artistObj)[0];
      let artist = Object.values(artistObj)[0];
      return (
        <div>
          <NavBarContainer className="navShow" loc={loc}/>

          {/* <div className="modalBackground">
            <img className="albumArtBackground" src={this.state.album.photoUrl} />
          </div> */}

          <div className="showFlexing">
            <div className="showMidPage">
                <div className="songBanner">
                  <div className="bannerLeft">
                    <i className="fas fa-play-circle"></i>

                    <div className="showTitles">
                      <div className="showArtist">
                        <Link to={`/artists/${index}`}className="showArtist">{artist.username}</Link>
                      </div>
                      
                      <div className="showTrack">
                        <p className="showTrack">{this.state.album.title}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bannerRight">
                    <img className="albumArtLarge" src={this.state.album.photoUrl} />
                  </div>
                </div>

                <div className="albumShowLeftAndRight">
                  <div className="albumShowMidLeft">
                    <div className="addComment">
                      <input type="text" className="addingComment"placeholder="Write a comment"/>
                    </div>
                    <div className="">
                      <p>stats</p>
                    </div>
                  </div>
                  
                  <div className="albumShowMidRight">
                    stuff goes in here
                    </div>

                </div>

            </div>
          </div>
          <MediaPlayer />
        </div>
      )
    }
  }
}

export default AlbumShow;