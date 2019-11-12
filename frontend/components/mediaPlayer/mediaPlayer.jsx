import React from 'react';
import { Link } from 'react-router-dom';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = { fetchingUsers: false };
    this.filter = this.props.filter;
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchAlbums();
    this.props.fetchSong(577)
      .then(this.setState({ fetchingUsers: "done" }));
  }
  
  render() {
    // debugger 

    if (this.props.albums.length <= 1 || this.props.users.length <= 1 || !this.props.song) {

      return null;

    } else {
    // debugger
    justLikeHoney = this.props.songs[101];

    return (
        <div className="mediaBar">
          <audio controls width="300px" height="50px">
            <source src={url_for(justLikeHoney.audio_file)} />
          </audio>
        </div>
    )}
  }
}

export default MediaPlayer;