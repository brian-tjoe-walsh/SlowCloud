import React from 'react';
import { Link } from 'react-router-dom';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = { songs: null };
    this.filter = this.props.filter;
  }

  componentDidMount() {
    if (!this.state.songs) {
      // debugger
      this.props.fetchSongs()
        .then( (res) => this.setState({ songs: res.songs }));
    }

    // debugger
  }
  
  render() {

    if (!this.state.songs) {

      return null;

    } else {
      console.log(this.state.songs);
    // debugger
    let justLikeHoney = this.state.songs[1902];

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