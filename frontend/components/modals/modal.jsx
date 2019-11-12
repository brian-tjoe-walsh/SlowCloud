import React from 'react';
import {Redirect} from "react-router-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.state = {go: false};
  }

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
