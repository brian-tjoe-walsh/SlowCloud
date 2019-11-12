import React from 'react';
import Albums from '../album/album';
import NavBarContainer from '../navbar/navbar_container';
import MediaPlayer from '../mediaPlayer/mediaPlayer_container';
import Album from '../album/album';
import { Link, Redirect } from 'react-router-dom';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { artist: null };
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchAlbums()
      .then(this.setState({ artist: this.props.users[this.props.artistId] }));

  }

  componentDidUpdate(prevProps) {
    if (prevProps.artistId !== this.props.artistId) {
      this.props.fetchUsers();
      this.props.fetchAlbums()
        .then(this.setState({ artist: this.props.users[this.props.artistId] }));
    }
  }

  getAlbums() {
    let albums = {};
    this.props.albums.forEach( (album, index) => {
      if (album.user_id === this.state.artist.id) {
        albums[index] = album;
      }
    }); 

    return albums;
  }

  getArtist() {
    let artist;

    if (!this.state.artist.id) {
      this.setState({ artist: this.props.artists[this.props.artistId] });
    }

    artist = this.state.artist;
    
    return artist;
  }

  render() {
    const { users, albums } = this.props;
    const loc = { url: "/artists" };

    if (!this.state.artist) {
      return null;
    } else {
      const artist = this.getArtist();
      const artistAlbums = this.getAlbums(); 

      const albumList = Object.values(artistAlbums);
      const albumIndices = Object.keys(artistAlbums);

      return (
        <div className="userShowBackground">
          <NavBarContainer className="navShow" loc={loc} />

          <div className="userShowMid">

            <div className="userBanner">
              <div className="artistBannerPic">
                <img className="artistMainArt" src={artist.photoUrl} />
              </div>

              <div className="artistShowTitleOuter">
                <h3 className="artistShowTitle">{artist.username}</h3>
              </div>

            </div>

            <div className="showMidLower">
              
              <div className="showMidLeft">
                <div className="showUserTitles">
                  <h3 className="showUserTitle"> Albums</h3>
                </div>

                <div className="showLeftAndRight">
                  <div className="userAlbumList">
                    {albumList.map((album, index) => (
                      <div className="userIndividualAlbum" key={album.id}>
                        <Link to={`/albums/${albumIndices[index]}`}><img className="albumArt" id="showPagePic" src={album.photoUrl}></img></Link>
                        
                        <div className="showTitleSpacing">
                          <div className="showTitleAdjustments">
                            <i className="fas fa-play-circle" id="showPagePlay"></i>
                            <div className="showJustTitles">
                              <Link to={`/artists/${this.props.artistId}`} className="showAlbumArtist">{artist.username}</Link>
                              <Link to={`/albums/${albumIndices[index]}`} className="showAlbumTitle">{album.title}</Link>
                            </div>
                          </div>
                          <div className="waveFormContainer">
                            <img className="waveForm" src={window.waveform} />
                          </div>
                        </div>
                      </div>
                      ))}
                  </div>

                  <div className="showMidRight">
                    stuff goes in here
                  </div>

                </div>

              </div>


            </div>

          </div>
          <MediaPlayer albums={albumList} />
        </div>
      )
    }
  }
}

export default UserShow;