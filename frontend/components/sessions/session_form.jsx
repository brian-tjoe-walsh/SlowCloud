import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.errors = [];
    this.props.clearErrors();

    let background = document.getElementsByClassName("preModal");
    return ($(background).addClass("modal"));
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
      // .then(() => this.props.history.push('/discover'));
  }

  handleDemo(e) {
    this.setState({
      username: 'KevinShields',
      email:'mybloodyvalentine@gmail.com',
      password: 'shoegaze'
    }, () => this.handleSubmit(e));
  }

  headerAssignment() {
    let header = {banner: "", link: "", linkName: "", linkButton: ""};

    if (this.props.formType === "login") {
      header.banner += "Sign in";
      header.link += "/signup";
      header.linkName += "Don't have an an account?";
      header.linkButton += "Click to create an account";
    } else {
      header.banner += "Sign up";
      header.link += "/login";
      header.linkName += "Have an account already?";
      header.linkButton += "Click to sign in";
    }

    return header;
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

      
  render() {
    let header = this.headerAssignment();
    let errors;
    if (this.props.errors.length) {
      errors = this.props.errors.map( (err, idx) => <li key={idx}>{err}</li>)
    } else {
      errors= [""]
    }

    if (this.props.formType === "login") {
      return (
          <div className="form">
            <ul>
              {errors}
            </ul>

            <form onSubmit={(e) => this.handleSubmit(e)}>

              <button className="button" id="demo" onClick={(e) => this.handleDemo(e)}>
                <div className="innerText">Demo User</div>
              </button>
              <a className="button" id="switch" href="/#/signup">
                <div className="innerText">{header.linkButton}</div>
              </a>

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

                <input className="button" type="submit" value={header.banner} />
              </div>

            </form>
          </div>
      ); 
    } else {
      return (
        <div className="form">
          <ul>
            {errors}
          </ul>

          <form onSubmit={(e) => this.handleSubmit(e)}>
            
            <a className="button" id="demo" href="">
              <div className="innerText">Demo User</div>
            </a>
            <a className="button" id="switch" href="/#/login">
              <div className="innerText">{header.linkButton}</div>
            </a>

            <div className="or">
              <hr/>
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
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Your Email Address"
              />

              <input className="text"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Your Password"
              />

              <input className="button" type="submit" value={header.banner} />
            </div>

            {/* <label>{header.linkName}</label> */}
          </form>
        </div>
      ); 
    }
  }
}

export default SessionForm;