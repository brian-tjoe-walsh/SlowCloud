import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../sessions/login_button';
import SignupButton from '../sessions/signup_button';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.loc = this.props.loc;
    this.logout = this.props.logout;
    this.state = { 
      currentUser: this.props.currentUser,
      open: false };
    this.toggle = this.toggle.bind(this);
    this.loggingOut = this.loggingOut.bind(this);
  }

  componentDidMount() {
    this.setState({user: this.props.currentUser});

    if (this.loc.url === "/discover") {
      let background = document.getElementsByClassName("home");
      return ($(background).addClass("here"));
    } else if (this.loc.url === "/library") {
      let background = document.getElementsByClassName("library");
      return ($(background).addClass("here"));
    } else if (this.loc.url === "/upload") {
      let background = document.getElementsByClassName("upload");
      return ($(background).addClass("here"));
    }
  }

  componentWillUnmount() {
    if (this.loc.url === "/discover") {
      let background = document.getElementsByClassName("home");
      return ($(background).removeClass("here"));
    } else if (this.loc.url === "/library") {
      let background = document.getElementsByClassName("library");
      return ($(background).removeClass("here"));
    } else if (this.loc.url === "/upload") {
      let background = document.getElementsByClassName("upload");
      return ($(background).removeClass("here"));
    }
  }

  toggle() {
      if (this.state.open) {
        this.setState({open: false});
      } else {
        this.setState({open: true});
      }
  }

  loggingOut() {
    debugger
    this.logout()
    .then(() => { window.location.reload(); });
    // .then( () => this.forceUpdate());
  }

  render() {
    debugger
    if (this.state.currentUser) {
      return (
        <div className="navBar">
          <div className="components">
            <Link to="/discover" className="mainLogo">
              <img className="navShoe" src={window.shoe} />
              {/* <Link to="/discover" className="mainLogoText">SLOWCLOUD</Link> */}
            </Link>
            <Link to="/discover" className="link home">Home</Link>
            <Link to={`/artists/${this.state.currentUser.id}`} className="link library">Library</Link>
            <form className="search" >
              <input type="text"
                className="bar"
                placeholder="Search for artists or songs (e.g.My Bloody Valentine)"
              />
            </form>
            <Link to="/upload" className="link upload">Upload</Link>

            {/* <button className="profile">This is empty</button> */}
            <Link to={`/artists/${this.state.currentUser.id}`}>
              <div className="navBarProfile">
                <img src={this.state.currentUser.photoUrl} className="albumShowMiniPic navBarProfPic"/>
                <div className="profile" >{this.state.currentUser.username}</div>
              </div>
            </Link>

            <div className="menu">
              <div className="dropDown" onClick={this.toggle}>
                {(this.state.open) ? (
                  <div className="dropDown">
                    <div>...</div>
                    <div className="flexingRight">
                      <button
                        onClick={this.loggingOut}
                        className="loggingOut"
                      >Logout
                    </button>
                    </div>
                  </div>
                ) : <div>...</div>}
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="navBar">
          <div className="components">
            <Link to="/discover" className="mainLogo">
              <img className="navShoe" src={window.shoe} />
              {/* <Link to="/discover" className="mainLogoText">SLOWCLOUD</Link> */}
            </Link>
            <Link to="/discover" className="link home">Home</Link>
            <Link to="/library" className="link library">Library</Link>
            <form className="search" >
              <input type="text"
                className="bar"
                placeholder="Search for artists or songs (e.g.My Bloody Valentine)"
              />
              {/* <div>
                <i className="far fa-search"></i>
              </div> */}
            </form>
            <div className="logSign">
              <LoginButton background="navBarLogin" />

              <SignupButton background="navBarSignup" />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default NavBar;