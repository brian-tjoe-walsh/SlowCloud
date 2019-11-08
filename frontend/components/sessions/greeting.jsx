import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;
  }

  // componentDidMount() {
  //   let background = document.getElementsByClassName("preModal");
  //   return ($(background).removeClass("modal"));
  // }
  
  
  background() {
    let background = document.getElementsByClassName("preModal");
    return ($(background).addClass("modal"));
  }

  render() {
    if (this.currentUser) {
      return (
        <div> 
          Beep Boop you're on the wrong page!
          <button onClick={() => this.logout()}>Logout</button>
        </div>)
    } else {
      return (
        <div className="greetingBar">
          <div className="topBar">
            <div className="logo" onClick={() => <Link to="/"/>}>
              <div className="adjusting">
                <div><img className="shoe" src={window.shoe}/></div>
                <div className="soundcloud"><p className="slow">SLOWCLOUD</p></div>
              </div>
            </div>
            <div className="links">
              <Link 
                onClick={this.background} 
                className="login" 
                to="/login"
                >Sign In</Link>

              <Link 
                onClick={this.background} 
                className="signup" 
                to="/signup"
                >Create Account</Link>
            </div>
          </div>
          <div className="lower">
            <div className="midContent">
              <h1 className="titleCard">What's next in music is first on SlowCloud</h1>
              <p className="mainText">
                Upload your first track and begin your journey. SlowCloud gives you space to create, find your fans, and connect with other artists.
              </p>
            </div>
            <div className="lowerLinks">
              <Link to="" className="greetingLearnMore">Learn more</Link>
              <Link to="" className="greetingUploading">Start uploading today</Link>
            </div>
          </div>
        </div>
      )
    }
  } 
}

export default Greeting;
{/* <Link className="soundcloud" to="/">Soundcloud</Link> */}

// export default Greeting;