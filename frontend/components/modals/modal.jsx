import React from 'react';
import {Redirect} from "react-router-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.state = {go: false};
  }



  // componentDidMount() {
  //   this.something = document.getElementsByClassName("preModal");

  //   this.something.addEventListener("click", this.goHome);
  // }

  goHome() {
    this.setState({ go: true });
  }

  setBack() {
    this.setState({go: false});
  }
  
  render() {
    if (this.state.go) {
      this.setBack();
      return <Redirect to="/"></Redirect>
    }
    return(
      <div className="preModal" onClick={this.goHome}>

      </div>
    );
  }
}

export default Modal;
