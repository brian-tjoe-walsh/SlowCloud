import React from 'react';
import Albums from '../album/albums_container';
import Listening from '../listening/listening_container';
import NavBarContainer from '../navbar/navbar_container';

class Discover extends React.Component {

  constructor(props) {
    super(props);
    this.state = {fetchingUsers: false};
  }

  componentDidMount() {
    // debugger
    window.scrollTo(0, 0);
    if (this.props.state.entities.albums[10] && this.props.state.entities.users[10]) {
      this.setState({ fetchingUsers: "done" });
    } else {
      this.props.fetchUsers();
      this.props.fetchAlbums()
        .then(this.setState({ fetchingUsers: "done" }));
    }
  }



  render() {
    const loc = { url: "/discover" };

    return(
      <div className="discoverWebPage">
        <NavBarContainer loc={loc}/>

        <div className="flexing">
          <div className="discoverMidPage">

            <div className="leftSide">
              <div className="discoverRows">
                <div className="discoverTitles">
                  <h3>Trending</h3>
                  <p className="miniDesc">The biggest hits, chosen by you</p>
                </div>

                {(this.props.albums.length <= 1 || this.props.users.length <= 1) ? 
                  (<div className="loaderContainer">
                    <div className="loader"></div>
                  </div>) 
                : (<Albums category="random" max={4} />)}

              </div>
              
              <div className="navHr">
                <hr className="navHr"/>
              </div>

              <div className="discoverRows">
                <div className="discoverTitles">
                  <h3>New Music Now</h3>
                  <p className="miniDesc">See what's on the come up</p>
                </div>

                {(this.props.albums.length <= 1 || this.props.users.length <= 1) ?
                  (<div className="loaderContainer">
                    <div className="loader"></div>
                  </div>)
                : (<Albums category="new" max={4} />)}

              </div>

              <div className="navHr">
                <hr className="navHr"/>
              </div>

              <div className="discoverRows">
                <div className="discoverTitles">
                  <h3>The Classics</h3>
                  <p className="miniDesc">Revisit the albums that defined the genre</p>
                </div>

                {(this.props.albums.length <= 1 || this.props.users.length <= 1) ?
                  (<div className="loaderContainer">
                    <div className="loader"></div>
                  </div>)
                : (<Albums category="classic" max={4} />)}

              </div>

              <div className="navHr">
                <hr className="navHr" />
              </div>

              <div className="discoverRows">
                <div className="discoverTitles">
                  <h3>Heavier Things</h3>
                  <p className="miniDesc">Enjoy these barbed wire kisses</p>
                </div>

                {(this.props.albums.length <= 1 || this.props.users.length <= 1) ?
                  (<div className="loaderContainer">
                    <div className="loader"></div>
                  </div>)
                : (<Albums category="heavy" max={4} />)}

              </div>

              <div className="navHr">
                <hr className="navHr" />
              </div>

              <div className="discoverRows">
                <div className="discoverTitles">
                  <h3>Sonic Dreams</h3>
                  <p className="miniDesc">Wrap your ears in a bed of warmth</p>
                </div>

                {(this.props.albums.length <= 1 || this.props.users.length <= 1) ?
                  (<div className="loaderContainer">
                    <div className="loader"></div>
                  </div>)
                : (<Albums category="dream" max={4} />)}

              </div>
            </div>

            <div className="rightSide">
              <div className="listeningHistory">
                <p>Listening History</p>

                {(this.props.albums.length <= 1 || this.props.users.length <= 1) ?
                  (<div className="loaderContainer">
                    <div className="loader"></div>
                  </div>)
                  : (<Listening albums={this.props.state.entities.albums} />)}

              </div>
            </div>
          </div> 
        </div>
      </div>
    )
  }
}

export default Discover;