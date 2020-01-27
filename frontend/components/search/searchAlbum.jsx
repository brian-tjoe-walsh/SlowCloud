import React from 'react';

class SearchAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.goToAlbum = this.goToAlbum.bind(this);
    this.goToArtist = this.goToArtist.bind(this);
  }

  goToAlbum() {
    this.props.history.push(`/albums/${this.props.ele.id}`);
  }

  goToArtist() {
    this.props.history.push(`/artists/${this.props.ele.artist.id}`);
  }

  render() {
    return (
      <div className="searchUser">
        <div className="searchUser-pic" onClick={this.goToAlbum}>
          <img src={this.props.ele.photoUrl} className="searchAlbum-pic-photo" />
        </div>
        <div className="searchUser-info">
          <div className="searchAlbum-artist" onClick={this.goToArtist}>
            {this.props.ele.artist.username}
          </div>
          <div className="searchAlbum-title" onClick={this.goToAlbum}>
            {this.props.ele.title}
          </div>
          <div className="searchUser-albums" onClick={this.goToAlbum}>
            <i className="fas fa-music"></i>
            {Object.values(this.props.ele.songs).length}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAlbum;