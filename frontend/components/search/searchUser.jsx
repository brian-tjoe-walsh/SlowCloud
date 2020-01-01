import React from 'react';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
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
            {Object.values(this.props.ele.albums).length}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchUser;