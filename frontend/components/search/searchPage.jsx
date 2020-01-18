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

      // if (artists.length || albums.length || songs.length) {

      // }
      
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
      // debugger
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
                  
                  {(artists.length || albums.length || songs.length) ? 
                  ((this.state.category === "Everything") ?
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
                  ): 
                  (
                    <div className="no-searches">
                      <i className="fas fa-search no-search"></i>  
                      <div className="no-songs-text no-top-margin">
                      <p>Sorry we didn't find any results for "{this.state.search}".</p>                  
                        <p>Check the spelling, or try a different search.</p>                  
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default SearchPage;