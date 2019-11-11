import React from 'react';
import GreetingContainer from './greeting_container';
import {Redirect} from 'react-router-dom';
import Modal from '../modals/modal_container';
import Albums from '../album/albums_container';
import { Link } from 'react-router-dom';
import MediaPlayer from '../mediaPlayer/mediaPlay_container';

class Splash extends React.Component {

  componentDidMount() {
    let background = document.getElementsByClassName("preModal");
    return ($(background).removeClass("modal"));
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
                className="splashBar"
                placeholder="Search for artists, bands, or tracks"
              />
              <p className="or">or</p>
              <Link to="" className="uploadRoute">Upload for free</Link>
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
            <MediaPlayer />
          </div>
      </div>
    );
  }

}

export default Splash;