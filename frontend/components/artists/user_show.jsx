import React from 'react';
import Albums from '../album/album';
import NavBarContainer from '../navbar/navbar_container';
import MediaPlayer from '../mediaPlayer/mediaPlayer_container';
import Album from '../album/album';
import { Link, Redirect } from 'react-router-dom';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {artist: null};
  }

  componentDidMount() { 
    // debugger

    this.props.fetchUser(this.props.artistId);
    this.props.fetchAlbums()
      .then((res) => this.setState({ artist: res.user }));
    debugger
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.artistId !== this.props.artistId) {
  //     this.props.fetchUser(this.props.artistId);
  //     this.props.fetchAlbums()
  //       .then(this.setState({ artist: this.props.users[this.props.artistId] }));
  //   }
  // }

  getAlbums() {
    artistAlbums = [];

    this.props.albums.forEach((alb) => {
      if (alb.user_id === this.state.artist.id) {
        artistAlbums.push(alb);
      }
    });

    debugger
    return artistAlbums;
  }

  render() {
    const { artist } = this.state;
    const loc = { url: "/artists" };

    if (!artist) {
      return null;
    } else {
      let artistAlbums = getAlbums();
      debugger

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
                    {artist.albums.map((album) => (
                      <div className="userIndividualAlbum" key={album.id}>
                        <Link to={`/albums/${album.id}`}><img className="albumArt" id="showPagePic" src={album.photoUrl}></img></Link>
                        
                        <div className="showTitleSpacing">
                          <div className="showTitleAdjustments">
                            <i className="fas fa-play-circle" id="showPagePlay"></i>
                            <div className="showJustTitles">
                              <Link to={`/artists/${this.props.artistId}`} className="showAlbumArtist">{artist.username}</Link>
                              <Link to={`/albums/${album.id}`} className="showAlbumTitle">{album.title}</Link>
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
          {/* <MediaPlayer albums={albumList} /> */}
        </div>
      )
    }
  }
}

export default UserShow;