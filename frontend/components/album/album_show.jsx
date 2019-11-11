import React from 'react';
import Songs from '../songs/songs_container';
import NavBarContainer from '../navbar/navbar_container';
import MediaPlayer from '../mediaPlayer/mediaPlay_container';

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
    let artist;

    if (!this.state.album.user_id) {
      this.setState({ album: this.props.albums[this.props.albumId] })
    }

    this.props.users.forEach( (user) => {
      if (user.id === this.state.album.user_id) {
        artist = user;
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
      let artist = this.getArtist();
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
                          <p className="showArtist">{artist.username}</p>
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
            </div>
          </div>
          <MediaPlayer />
        </div>
      )
    }
  }
}

export default AlbumShow;