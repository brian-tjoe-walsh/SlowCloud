import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      mounted: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    let btn = document.getElementById("log/sign");

    if (!this.state.mounted && btn) {
      // Execute a function when the user releases a key on the keyboard
      btn.addEventListener("keydown", function (event) {
        // debugger
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          btn.click();
        }
      });
    }
  }

  componentWillUnmount() {

  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.closeModal())
      .then(() => {window.location.reload(); });
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState({
      username: 'ShoegazeFan91',
      password: 'shoegaze'
    }, () => this.handleSubmit(e));
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }


  render() {
    let errors;
    if (this.props.errors.length) {
      errors = this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)
    } else {
      errors = [""]
    }

    return (
      <div className="form">
        {/* <div className="form-title">
          SLOWCLOUD
        </div> */}
        <ul>
          {errors}
        </ul>

        <form onSubmit={(e) => this.handleSubmit(e)}>

          <button className="button" id="demo" onClick={(e) => this.handleDemo(e)}>
            <div className="innerText">Demo User</div>
          </button>
          <div className="button" id="switch">
            <div className="innerText">{this.props.otherForm}</div>
          </div>

          <div className="or">
            <hr />
            <p>or</p>
            <hr />
          </div>

          <div className="inputs">
            <input className="text"
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Your Username"
            />

            <input className="text"
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Your Password"
            />

            <input id="log/sign" className="button" type="submit" value="Sign In"/>
          </div>

        </form>
      </div>
    );
  }
}

export default LoginForm;