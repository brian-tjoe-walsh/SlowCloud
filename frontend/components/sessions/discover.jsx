import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import Albums from '../album/albums_container';
import Listening from '../listening/listening_container';
import MediaPlayer from '../mediaPlayer/mediaPlayer';

class Discover extends React.Component {
  render() {
    const loc = {url: "/discover"};
    return(
      <div className="discoverWebPage">
        <NavBarContainer loc={loc} />

        <div className="flexing">
          <div className="discoverMidPage">

            <div className="leftSide">
              <div className="discoverRows">
                <div className="discoverTitles">
                  <h3>Trending</h3>
                  <p className="miniDesc">The biggest hits, chosen by you</p>
                </div>
                <Albums category="random" max={4} />
              </div>
              
              <div className="navHr">
                <hr className="navHr"/>
              </div>

              <div className="discoverRows">
                <div className="discoverTitles">
                  <h3>New Music Now</h3>
                  <p className="miniDesc">See what's on the come up</p>
                </div>
                <Albums category="new" max={4} />
              </div>

              <div className="navHr">
                <hr className="navHr"/>
              </div>

              <div className="discoverRows">
                <div className="discoverTitles">
                  <h3>The Classics</h3>
                  <p className="miniDesc">Revisit the albums that defined the genre</p>
                </div>
                <Albums category="classic" max={4} />
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

        <MediaPlayer />
      </div>
    )
  }
}

export default Discover;