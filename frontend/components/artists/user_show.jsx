import React from 'react';
import Albums from '../album/album';
import Album from '../album/album';
import { Link, Redirect } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import UserShowAlbum from './user_show_album';
import AlbumModal from '../album/album_modal_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserId: this.props.currentUserId,
      currentAlbum: null,
      artist: null,
      albums: null,
      playing: false,
      photoFile: null
    };
  }

  componentDidMount() { 
    window.scrollTo(0, 0);
    if (this.props.state.entities.users[this.props.artistId]) {
      
      this.setState({
        artist: this.props.state.entities.users[this.props.artistId],
        albums: this.props.state.entities.users[this.props.artistId].albums
      });
    } else {   

      this.props.fetchUser(this.props.artistId)
        .then((res) => this.setState({ 
          artist: res.user,
          albums: res.user.albums
        }));
    }
  }

  componentDidUpdate(prevProps) {
    debugger
    if (prevProps.artistId !== this.props.artistId) {
      this.props.fetchUser(this.props.artistId)
        .then((res) => this.setState({
          artist: res.user,
          albums: res.user.albums
        })
      );
    }
  }

  getAlbums() {
    let artistAlbums = [];
    let albums; 
    
    if (this.state.albums) {
      if (Array.isArray(this.state.albums)) {
        albums = this.state.albums;
      } else {
        albums = Object.values(this.state.albums);
      }
      albums.forEach((alb) => {
        if (alb.user_id === this.state.artist.id) {
          artistAlbums.push(alb);
        }
      });
    }

    return artistAlbums;
  }
  
  handleSubmit(e) {
    e.preventDefault(); 
    if (this.state.currentUserId === 35) {
      alert("You cannot switch the Demo's profile picture! Please create an account to use this feature.");

    } else {
      let file = e.currentTarget.files[0];
  
      if (file) {
        this.setState({ photoFile: file });
      }
      
      const formData = new FormData();
      formData.append(`user[photo]`, file);
      this.props.updateUser(formData);
    }
  }

  render() {
    const { artist, currentUserId} = this.state;
    
    let loc = { url: "/artists" };

    if (!artist) {
      return(<div>
        <NavBarContainer loc={loc} history={this.props.history} />
      </div>);
    } else {
      let artistAlbums = this.getAlbums();
      if (artist.id === this.state.currentUserId) {
        loc = { url: "/library" };
      }
      return (
        <div className="userShowBackground">
          <NavBarContainer loc={loc} history={this.props.history} />
          <div className="userShowMid">

            <div className="userBanner">
              <div className="artistBannerPic">
                <img className="artistMainArt" src={artist.photoUrl} />
                {(artist.id === this.state.currentUserId) ? (<input type="file" accept=".jpeg,.jpg,.tiff,.gif,.png,.pdf" className="changeProfilePicture" onChange={this.handleSubmit.bind(this)} />) : (null)}
              </div>

              <div className="artistShowTitleOuter">
                <h3 className="artistShowTitle">{artist.username}</h3>
              </div>

            </div>

            <div className="showMidLower">
              
              <div className="showMidLeft">
                <div className="showUserTitles">
                  <h3 className="showUserTitle"> Albums</h3>
                  {(artist.id === this.state.currentUserId) ? (<AlbumModal currentUserId={this.props.currentUserId} />) : (null)}
                </div>

                <div className="showLeftAndRight">
                  {(Object.values(this.state.albums).length) ? 
                  (
                  <div className="userAlbumList">
                    {artistAlbums.map((album) => {
                      return (
                        <UserShowAlbum 
                          key={album.id}
                          album={album}
                          state={this.props.state}
                          artist={artist}
                          artistId={this.props.artistId}
                          addSong={this.props.addSong}
                          deleteSong={this.props.deleteSong}
                          pauseSong={this.props.pauseSong}
                          playSong={this.props.playSong}
                        />
                      )})}
                  </div>
                  ) : 
                  (
                    <div className="no-songs-page">
                      <div className="no-songs-background">
                        <i className="fas fa-music" id="big-music"></i>
                        <div className="no-songs-text">
                          <p>
                            There are no albums currently by this artist.
                            </p>
                          {(artist.id === this.props.state.session.id) ? 
                            (<p>Create An Album Today!</p>)
                          :
                          (null)}
                          {/* <p>
                            <Link to={`/upload/`} className="upload-song-button-large">Upload A Song Now!</Link>
                          </p> */}
                        </div>
                      </div>
                    </div>
                  )} 

                  <div className="showMidRight">
                    <div className="showMidRightCont">
                      Albums
                      <div className="showMidRightNum">
                        {artistAlbums.length}
                      </div>
                    </div>
                    
                    <div className="shamelessPlug">
                      <a href="https://www.linkedin.com/in/brian-tjoe-walsh-89086991/" target="_blank"><i className="fab fa-linkedin"></i></a>
                      <a href="https://github.com/bbriannwalshh" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
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

export default UserShow;