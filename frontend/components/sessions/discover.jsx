import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import Trending from '../trending/trending_container';
import Listening from '../listening/listening_container';

class Discover extends React.Component {
  render() {
    const loc = {url: "/discover"};
    return(
      <div className="discoverWebPage">
        <NavBarContainer loc={loc} />

        <div className="flexing">
          <div className="discoverMidPage">

            <div className="leftSide">
              <div className="discoverTitles">
                <h3>Trending</h3>
                <p className="miniDesc">The biggest hits, chosen by you</p>
                <Trending />
              </div>
              
              <div className="navHr">
                <hr className="navHr"/>
              </div>

              <div className="discoverTitles">
                <h3>New Music Now</h3>
                <p className="miniDesc">See what's on the come up</p>
                <div className="discPics">
                  <Trending />
                </div>
              </div>
            </div>

            <div className="rightSide">
              <div className="listeningHistory">
                <h3>Listening History</h3>
                <Listening />
              </div>
            </div>
          </div> 
        </div>

      </div>
    )
  }
}

export default Discover;