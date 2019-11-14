import React from 'react';
import Trending from '../trending/trending_container';
import Albums from '../album/albums_container';
import NavBarContainer from '../navbar/navbar_container';

class Library extends React.Component {
  render() {
    const loc = { url: "/library" };
    return (
      <div className="discoverWebPage">
        <NavBarContainer loc={loc} />

        <div className="flexing">
          <div className="discoverMidPage">

            <div className="leftSide">
              <div className="discoverTitles">
                <h3>Trending</h3>
                <Albums cateogry="random" max={4} />
              </div>

              <div className="discoverTitles">
                <h3>New Music Now</h3>
                <Albums category="new" max={4} />
              </div>
            </div>

            <div className="rightSide">
              <div className="listeningHistory">
                RAAAWR
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Library;