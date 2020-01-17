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
      open: false,
      search: "" 
    };
    this.toggle = this.toggle.bind(this);
    this.loggingOut = this.loggingOut.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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
    this.logout()
    .then(() => { window.location.reload(); });
  }

  updateSearch(search) {
    return (e) => {
      this.setState({ [search]: e.currentTarget.value});
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
    return (
      <div className="navBar">
        <div className="components">
          <Link to="/discover" className="mainLogo">
            <img className="navShoe" src={window.shoe} />
          </Link>
          <Link to="/discover" className="link home">Home</Link>
          {(this.state.currentUser) ? 
          (<Link to={`/artists/${this.state.currentUser.id}`} className="link library">Library</Link>)
          :
          (<Link to="/library" className="link library">Library</Link>)
          }
          <form className="search" >
            <input className="bar"
              type="text"
              value={this.state.search}
              onChange={this.updateSearch('search')}
              placeholder="Search for artists or songs (e.g.My Bloody Valentine)"
              onKeyPress={this.handleKeyPress}
            />
            <div>
              <i className="fas fa-search" onClick={this.sendSearch}></i>
            </div>
          </form>
          {
          (this.state.currentUser) ? 
            (<div className="navBarArrange">
              <Link to="/upload" className="link upload">Upload</Link>

              <Link to={`/artists/${this.state.currentUser.id}`}>
                <div className="navBarProfile">
                  <img src={this.state.currentUser.photoUrl} className="albumShowMiniPic navBarProfPic" />
                  <div className="profile" >{this.state.currentUser.username}</div>
                </div>
              </Link>
              <div className="menu">
                <div className="dropDown" onClick={this.toggle}>
                  {(this.state.open) ? (
                    <div className="dropDown">
                      <div className="dot-dot-dot">...</div>
                      <div className="flexingRight">
                        <button
                          onClick={this.loggingOut}
                          className="loggingOut" >
                          Logout
                        </button>
                      </div>
                    </div>
                  ) : <div className="dot-dot-dot">...</div>}
                </div>
              </div>
            </div>)
          :
            (<div className="logSign">
              <LoginButton background="navBarLogin" />

              <SignupButton background="navBarSignup" />
            </div>)
          }
        </div>
      </div>
    )
  }
}

export default NavBar;