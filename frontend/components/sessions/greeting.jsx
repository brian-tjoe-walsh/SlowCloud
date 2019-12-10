import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../sessions/login_button';
import SignupButton from '../sessions/signup_button';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;
  }  

  render() {
    if (this.currentUser) {
      return (
        <div> 
          <button onClick={() => this.logout()}>Logout</button>
        </div>)
    } else {
      return (
        <div className="greetingBar">
          <div className="topBar">
            <div className="logo" onClick={() => <Link to="/"/>}>
              <div className="adjusting">
                <div><img className="shoe" src={window.shoe}/></div>
                <div className="slowcloud"><p className="slow">SLOWCLOUD</p></div>
              </div>
            </div>
            <div className="links">
              <LoginButton background="login"/>

              <SignupButton background="signup"/>
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