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
      this.props.fetchSongs()
        .then( (res) => this.setState({ songs: res.songs }));
    }
  }
  
  render() {

    if (!this.state.song) {

      return null;

    } else {
      console.log(this.state.songs)
    // debugger
    let justLikeHoney = this.state.songs[101];

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