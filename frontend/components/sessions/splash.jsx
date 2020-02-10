import React from 'react';
import GreetingContainer from './greeting_container';
import {Redirect} from 'react-router-dom';
import Modal from '../modals/modal';
import Albums from '../album/albums_container';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ""};
    this.sendSearch = this.sendSearch.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let background = document.getElementsByClassName("preModal");
    return ($(background).removeClass("modal"));
  }

  updateSearch(search) {
    return (e) => {
      this.setState({ [search]: e.currentTarget.value });
    };
  }

  sendSearch() {
    let search = this.state.search.split(" ").join("%20");
    this.props.history.push(`/search?query=${search}`);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      let search = this.state.search.split(" ").join("%20");
      this.props.history.push(`/search?query=${search}`);
    }
  }

  render() {
    return(
      <div>
        <Modal />
        <div className="webPage">
          <div className="midPage">
            <GreetingContainer />

            <form className="mainSearch" >
              <input type="text" 
                onChange={this.updateSearch('search')}
                value={this.state.search}
                className="splashBar"
                placeholder="Search for artists, bands, or tracks, (e.g. My Slowdive)"
                onKeyPress={this.handleKeyPress}
              />
              <div>
                <i className="fas fa-search" id="splashSearch" onClick={this.sendSearch}></i>
              </div>
              <p className="or">or</p>
              <Link to="/discover" className="uploadRoute">Discover Music</Link>
            </form>
            <div className="splashTrend">
              <div className="discoverTitles">
                <h3 className="hearWhatsTrending">
                  Hear what's trending for free in the SlowCloud Community
                </h3>
              </div>  
              <div className="trendingRows">
              <Albums category="random" max={6}/>
              </div>
              <div className="trendingRows">
              <Albums category="random" max={6}/>
              </div>
            </div>

            <div>
              <Link to="/discover" className="uploadRoute">Explore Trending Songs</Link>
            </div>
          </div>

        </div> 
          <div>
          </div>
      </div>
    );
  }

}

export default Splash;