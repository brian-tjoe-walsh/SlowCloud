import React from 'react';
import Albums from '../album/album';
import Album from '../album/album';
import { Link, Redirect } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import UserShowAlbum from './user_show_album';

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

    // debugger
    
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

  handleFile(e) {
    let file = e.currentTarget.files[0];

    if (file) {
      this.setState({ photoFile: file});
    }
    
  }
  
  handleSubmit(e) {
    e.preventDefault(); 

    let file = e.currentTarget.files[0];

    if (file) {
      this.setState({ photoFile: file });
    }
    
    const formData = new FormData();
    formData.append(`user[photo]`, file);
    this.props.updateUser(formData);
  }

  render() {
    const { artist, } = this.state;
    
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
                <input type="file" onChange={this.handleSubmit.bind(this)}/>
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

                  <div className="showMidRight">
                    <div className="showMidRightCont">
                      Albums
                      <div className="showMidRightNum">
                        {artistAlbums.length}
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
        </div>
      )
    }
  }
}

export default UserShow;