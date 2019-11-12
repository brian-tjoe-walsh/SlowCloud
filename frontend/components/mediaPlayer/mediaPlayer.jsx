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
    this.props.fetchAlbums()
      .then(this.setState({ fetchingUsers: "done" }));
  }
  
  render() {
    const { users, albums } = this.props;
    
    if (this.state.fetchingUsers !== "done") {

      return null;

    } else {
      debugger
      justLikeHoney = this.props.albums[10].songs[0];

      return (
          <div className="mediaBar">
            media goes here
          </div>
      )
    }
  }
}

export default MediaPlayer;