import React from 'react';
import { Link } from 'react-router-dom';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = { song: null };
    this.filter = this.props.filter;
  }

  componentDidMount() {
    if (!this.state.song) {
      this.props.fetchSong(577)
        .then( (res) => this.setState({ song: res.song }));
    }
  }
  
  render() {

    if (!this.state.song) {

      return null;

    } else {
    // debugger
    let justLikeHoney = this.state.song;

    return (
        <div className="mediaBar">
          <audio controls width="100%" height="50px">
          <source src={justLikeHoney.audio_fileUrl} />
          </audio>
        </div>
    )}
  }
}

export default MediaPlayer;