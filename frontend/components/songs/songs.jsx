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
    this.props.fetchUsers();
    this.props.fetchAlbums();
    this.props.fetchSongs()
      .then(this.setState({fetchingUsers: "done"}));
  }


  renderNum(max, songs) {
    let indices = [];
    let num;

    if (max < 1000000) {
      while (indices.length < max) {
        num = Math.floor(Math.random() * songs.length);

        if (!indices.includes(num)) {
          indices.push(num);
        }
      }

      return indices;
    } else {
      return null;
    }
  }


  render() {
    const { songs, users, albums } = this.props;

    if (songs.length < 1 || users.length <= 1 || albums.length <= 1) {

      return null;

    } else {
      let nums = this.renderNum(this.props.max, songs);
      return(
          <ul className="listed">
            {(nums !== null) ? 
              (nums.map( num => <Song key={songs[num].id} 
                                      type="nums.map" 
                                      num={num} 
                                      song={songs[num]} 
                                      users={users} 
                                      albums={albums}/>)) 

              : (songs.map( (song) => <Song type="songs.map" 
                                            key={song.id} 
                                            song={song} 
                                            users={users} 
                                            albums={albums}/>))
            }
          </ul> 
      );
    }

  }
}

export default Songs;