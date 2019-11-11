import React from 'react';
import { Link } from 'react-router-dom';
import Album from './album';

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = this.props.state;
    this.filter = this.props.filter;
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchAlbums()
      .then(this.setState({ fetchingUsers: "done" }));
  }

  categorize(max) {
    // debugger
    if (this.props.category === "new") {
      return [15, 34, 31, 9, 42].slice(0, max);
    } else if (this.props.category === "random") {
      let indices = [];
      let num;

      if (max < 20) {
        while (indices.length < max) {
          num = Math.floor(Math.random() * this.props.albums.length);

          if (!indices.includes(num)) {
            indices.push(num);
          }
        }

        return indices;
      } else {
        return null;
      }
    } else if (this.props.category === "classic") {
      return [10, 1, 4, 7, 35].slice(0, max);
    }
  }


  render() {
    const { users, albums } = this.props;
    if (users.length <= 1 || albums.length <= 1) {

      return null;

    } else {
      let nums = this.categorize(this.props.max);
      return (
        <ul className="listed">
          {(nums !== null) ?
            (nums.map(num => <Album key={albums[num].id}
              type="nums.map"
              num={num}
              album={albums[num]}
              users={users} />))

            : (albums.map((album, index) => <Album type="albums.map"
              num={index}
              key={album.id}
              album={album}
              users={users}/>))
          }
        </ul>
      );
    }

  }
}

export default Albums;