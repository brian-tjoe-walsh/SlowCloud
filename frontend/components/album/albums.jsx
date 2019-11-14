import React from 'react';
import { Link } from 'react-router-dom';
import Album from './album';

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.albums = this.props.albums;
    this.state = {
      albs: []};
  }

  componentDidMount() {
    this.props.fetchAlbums()
      .then((res) => this.albums = res.albums)
      .then(() => this.categorize(this.props.max));
  }

  categorize(max) {
    let temp;

    if (this.state.albs.length) {
      return this.state.albs;
    } else {

      if (this.props.category === "new") {
        temp = [this.albums[15], this.albums[34], this.albums[31], this.albums[9], this.albums[42]].slice(0, max);
        this.setState({albs: temp});
        return this.state.albs;

      } else if (this.props.category === "random") {
        let indices = [];
        let num;

        if (max < 20) {
          while (indices.length < max) {
            num = Math.floor(Math.random() * this.albums.length);

            if (!indices.includes(this.albums[num])) {
              indices.push(this.albums[num]);
            }
          }
          this.setState({albs: indices});
          return this.state.albs;
        } else {
          return null;
        }
      } else if (this.props.category === "classic") {
        temp = [this.albums[10], this.albums[1], this.albums[4], this.albums[7], this.albums[35]].slice(0, max);
        this.setState({albs: temp});
        return this.state.albs;
      }
    }
  }


  render() {
    const { fetchUser } = this.props;
    const { albs } = this.state;

    if (!this.albums.length) {

      return null;

    } else {

      return (
        <ul className="listed">
          {(albs.length) ?
            (albs.map(album => <Album key={album.id}
              type="albs.map"
              album={album} 
              fetchUser={fetchUser} />))

            : (this.albums.map((album) => <Album key={album.id}
              type="albums.map"
              album={album} 
              fetchUser={fetchUser} />))
          }
        </ul>
      );
    }

  }
}

export default Albums;