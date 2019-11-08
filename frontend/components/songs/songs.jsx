import React from 'react';
import {Link} from 'react-router-dom';
import Song from './song';

class Songs extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = this.props.state;
    this.filter = this.props.filter;
  }

  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchUsers()
      .then(this.setState({fetchingUsers: "done"}));
  }




  render() {
    const { songs, users } = this.props;

    if (!songs || users.length <= 1) {
      return null;
    } else return(
      <div className="trendingRow"> 
        <ul className="listed">
          {songs.map( (song) => <Song key={song.id} song={song} users={users}/>)}
        </ul> 
      </div>
    );

  }
}

export default Songs;