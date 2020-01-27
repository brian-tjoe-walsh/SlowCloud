import React from 'react';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    this.props.history.push(`/artists/${this.props.ele.id}`);
  }

  render() {
    return(
      <div className="searchUser">
        <div className="searchUser-pic">
          <img src={this.props.ele.photoUrl} className="searchUser-pic-photo" onClick={this.goHome}/>
        </div>
        <div className="searchUser-info">
          <div className="searchUser-title" onClick={this.goHome}>
            {this.props.ele.username}
          </div>
          <div className="searchUser-albums" onClick={this.goHome}>
            <i className="fas fa-compact-disc"></i>
            {(this.props.ele.albums) ? (Object.values(this.props.ele.albums).length) : ("0")}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchUser;