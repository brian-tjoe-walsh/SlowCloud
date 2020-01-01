import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();

    let background = document.getElementsByClassName("preModal");
    return ($(background).addClass("modal"));
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push('/discover'))
      .then(() => this.props.closeModal())
      .then(() => { window.location.reload(); });

  }

  handleDemo(e) {
    e.preventDefault();
    this.setState({
      username: 'GlasgowFan65',
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

            <input className="button" type="submit" value="Sign Up" />
          </div>

          {/* <label>{header.linkName}</label> */}
        </form>
      </div>
    ); 
  }
}

export default SignupForm;