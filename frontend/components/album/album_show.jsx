import React from 'react';
import Songs from '../songs/songs_container';
import NavBarContainer from '../navbar/navbar_container';
import MediaPlayer from '../mediaPlayer/mediaPlayer_container';
import { Link, Redirect } from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {album: "hello",
                  artist: "null"};
  }

  componentDidMount() {
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


    if (this.state.album === "hello") {
      return null;
    } else {
      return (
        <div>
          <NavBarContainer className="navShow" loc={loc}/>

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
          {/* <MediaPlayer /> */}
        </div>
      )
    }
  }
}

export default AlbumShow;