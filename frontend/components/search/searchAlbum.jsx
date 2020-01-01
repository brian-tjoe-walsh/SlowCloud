import React from 'react';

class SearchAlbum extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchUser">
        <div className="searchUser-pic">
          <img src={this.props.ele.photoUrl} className="searchAlbum-pic-photo" />
        </div>
        <div className="searchUser-info">
          <div className="searchAlbum-artist">
            {this.props.ele.artist.username}
          </div>
          <div className="searchAlbum-title">
            {this.props.ele.title}
          </div>
          <div className="searchUser-albums">
            <i class="fas fa-music"></i>
            {Object.values(this.props.ele.songs).length}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAlbum;