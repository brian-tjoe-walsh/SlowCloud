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
                <Trending />
              </div>

              <div className="discoverTitles">
                <h3>New Music Now</h3>
                <Trending />
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