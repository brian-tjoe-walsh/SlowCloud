import React from 'react';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    debugger
  }

  render() {
    return(
      <div className="searchUser">
        <div className="searchUser-pic">
          <img src={this.props.ele.photoUrl} className="searchUser-pic-photo"/>
        </div>
        <div className="searchUser-info">
          <div className="searchUser-title">
            {this.props.ele.username}
          </div>
          <div className="searchUser-albums">
            <i class="fas fa-compact-disc"></i>
            {(this.props.ele.albums) ? (Object.values(this.props.ele.albums).length) : ("0")}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchUser;