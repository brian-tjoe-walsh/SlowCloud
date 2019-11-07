import React from 'react';
import GreetingContainer from './greeting_container';
import {Redirect} from 'react-router-dom';
import Modal from '../modals/modal_container';
import Trending from '../trending/trending_container';
import { Link } from 'react-router-dom';

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
            <div>
              <div className="trendingTitle">
                Hear what's trending for free in the SlowCloud Community
              </div>  
              
              <Trending />

            </div>
          </div>
        </div> 
      </div>
    );
  }

}

export default Splash;