import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import SearchUser from './searchUser';
import SearchAlbum from './searchAlbum';
import SearchSong from './searchSong';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      fetchingUsers: false,
      searched: false,
      category: "Everything"
    };
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    console.log(this.props.search);

    let search = this.props.search.split("%20").join(" ");

    if (this.props.state.entities.albums[10] && this.props.state.entities.users[10]) {
      this.setState({ 
        fetchingUsers: "done",
        search: search 
      });
    } else {
      this.props.fetchUsers();
      this.props.fetchAlbums()
        .then(this.setState({ 
          fetchingUsers: "done",
          search: search 
        }));
    }
  }

  componentDidUpdate(prevProps) {
    // debugger
    if (prevProps.location.search !== this.props.location.search) {
      window.scrollTo(0,0);
    }

    if (this.props.state.entities.albums[10] && this.props.state.entities.users[10] && this.props.state.entities.songs[10]) {
      if (!this.state.searched || this.props.search !== prevProps.location.search.split("=")[1]) {
        let searched = {artists:[], albums:[], songs:[]};

        Object.values(this.props.state.entities.users).forEach((user) => {
          let username = user.username.toLowerCase();
          
          if (username.includes(this.state.search.toLowerCase())) {
            searched.artists.push(user);
          }
        });
        Object.values(this.props.state.entities.albums).forEach((album) => {
          let title = album.title.toLowerCase();
          let artist = album.artist.username.toLowerCase();

          if (title.includes(this.state.search.toLowerCase()) || artist.includes(this.state.search.toLowerCase())) {
            searched.albums.push(album);
          }
        });
        Object.values(this.props.state.entities.songs).forEach((song) => {
          let title = song.title.toLowerCase();
          let album = song.album.title.toLowerCase();
          let artist = song.artist.username.toLowerCase();

          if (title.includes(this.state.search.toLowerCase()) || album.includes(this.state.search.toLowerCase()) || artist.includes(this.state.search.toLowerCase())) {
            searched.songs.push(song);
          }
        });

        console.log(searched);
        this.setState({searched: searched});
      }

      let temp = this.props.location.search.split("=")[1].split("%20").join(" ");
      if (this.state.search !== temp) {
        this.setState({
          search: temp,
          searched: null
        });
      }
    }
  }

  changeState(ele) {
    if (this.state.category !== ele) {
      this.setState({category: ele});
      window.scrollTo(0, 0);
    }
  }

  render() {
    let loc = { url: "/artists" };

    if (!this.state.searched) {
      return (<div>
        <NavBarContainer loc={loc} history={this.props.history} />
        <div className="searchPageLoading">
          <p>Waiting For Searches To Load</p>
          <div className="loader" id="searchLoader"></div>
        </div>
      </div>);
    } else {
      let artists = this.state.searched.artists;
      let albums = this.state.searched.albums;
      let songs = this.state.searched.songs;
      let categories = {"Everything": [artists, albums, songs]};
      let category = this.state.category;
      let paragraph = null;
      
      // debugger
      if (artists.length) {
        categories["artists"] = artists;
        if (!paragraph) {
          if (artists.length === 1) {
            paragraph = [`Found ${artists.length} artist`]
          } else {
            paragraph = [`Found ${artists.length} artists`]
          }
        }
      }
      if (albums.length) {
        categories["albums"] = albums;
        if (!paragraph) {
          if (albums.length === 1) {
            paragraph = [`Found ${albums.length} album`]
          } else {
            paragraph = [`Found ${albums.length} albums`]
          }
        } else {
          if (albums.length === 1) {
            paragraph.push(`${albums.length} album`)
          } else {
            paragraph.push(`${albums.length} albums`)
          }
        }
      }
      if (songs.length) {
        categories["songs"] = songs;
        if (!paragraph) {
          if (songs.length === 1) {
            paragraph = [`Found ${songs.length} song`]
          } else {
            paragraph = [`Found ${songs.length} songs`]
          }
        } else {
          if (songs.length === 1) {
            paragraph.push(`${songs.length} song`)
          } else {
            paragraph.push(`${songs.length} songs`)
          }
        }
      }

      if (paragraph) { 
        paragraph = paragraph.join(", ") 
      }
      
      return (
        <div className="searchShowBackground">
          <NavBarContainer loc={loc} history={this.props.history}/>
          <div className="searchMainPage">
            <div className="searchMidPage">
              <div className="searchMidSection">
                <div className="searchResultHeader">
                  Search Results for "{this.state.search}"
                </div>
                <div className="searchBottom">
                  <div className="searchCategory">
                    <div className="searchCategorySubSec">
                      {Object.keys(categories).map( ele => {
                        if (ele === category) {
                          return(
                            <div className="highLighted">
                              <div className="searchHighlighted">
                                {ele.charAt(0).toUpperCase() + ele.slice(1)}
                              </div>
                              <div className="searchHighlightedTriangle">
                                *Triangle*
                              </div>
                            </div>
                          )
                        } else {
                          return (
                            <div className="searchSubCat" onClick={ e => this.changeState(ele)}>
                              {ele.charAt(0).toUpperCase() + ele.slice(1)}
                            </div>
                          )
                        }
                      }
                    )}
                    </div>
                  </div>
                    <p className="foundParagraph"> {paragraph} </p>
                  {(this.state.category === "Everything") ?
                  (<div className="searchResults">
                    {artists.map( (ele, idx) => {
                      return (<div key={idx}><SearchUser ele={ele} history={this.props.history}/></div>)
                    })}
                    {albums.map( (ele, idx) => {
                      return (<div key={idx}><SearchAlbum ele={ele} history={this.props.history} /></div>)
                    })}
                    {songs.map( (ele, idx) => {
                      return (<div key={idx}><SearchSong
                        ele={ele}
                        state={this.props.state}
                        history={this.props.history}
                        addSong={this.props.addSong}
                        deleteSong={this.props.deleteSong}
                        playSong={this.props.playSong}
                        pauseSong={this.props.pauseSong}
                      /></div>)
                    })}
                  </div>)
                    : (this.state.category === "artists") ? (<div className="searchResults">
                        {this.state.searched[this.state.category].map( (ele, idx) => {
                          return (<div key={idx}><SearchUser ele={ele} history={this.props.history} /></div>)
                        })} 
                      </div>
                    )
                    : (this.state.category === "albums") ? 
                      (<div className="searchResults">
                        {this.state.searched[this.state.category].map((ele, idx) => {
                          return (<div key={idx}><SearchAlbum ele={ele} history={this.props.history} /></div>)
                        })}
                      </div>)
                    : 
                      (<div className="searchResults">
                        {this.state.searched[this.state.category].map((ele, idx) => {
                          return (<div key={idx}><SearchSong 
                            ele={ele} 
                            state={this.props.state} 
                            history={this.props.history} 
                            addSong={this.props.addSong}
                            deleteSong={this.props.deleteSong}
                            playSong={this.props.playSong}
                            pauseSong={this.props.pauseSong}
                          /></div>)
                        })}
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
          {/* <div className="userShowMid">

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
                    {artistAlbums.map((album) => (
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

          </div> */}
        </div>
      )
    }
  }
}

export default SearchPage;