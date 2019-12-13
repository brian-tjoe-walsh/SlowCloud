import React from 'react';
import { Link } from 'react-router-dom';
import Album from './album';

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.albums = this.props.state.entities.albums;
    this.state = {
      state: this.props.state,
      albs: []};
  }

  componentDidMount() {
    // debugger
    if (this.albums[6]) {
      this.categorize(this.props.max);
    } else {
      this.props.fetchAlbums()
        .then((res) => this.albums = res.albums)
        .then(() => this.categorize(this.props.max));
    }
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
        let avoid = [15, 34, 31, 9, 42, 10, 1, 4, 7, 13, 16, 20, 24, 11, 14, 25, 30];
        let indices = [];
        let num;

        if (max < 20) {
          while (indices.length < max) {
            num = Math.floor(Math.random() * Object.keys(this.albums).length);

            if (!indices.includes(this.albums[num]) && !avoid.includes(num)) {
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
      } else if (this.props.category === "heavy") {
        temp = [this.albums[13], this.albums[16], this.albums[20], this.albums[24]].slice(0, max);
        this.setState({albs: temp});
        return this.state.albs;
      } else if (this.props.category === "dream") {
        temp = [this.albums[11], this.albums[14], this.albums[25], this.albums[30]].slice(0, max);
        this.setState({ albs: temp });
        return this.state.albs;
      }
    }
  }


  render() {
    const { fetchUser } = this.props;
    const { albs } = this.state;

    if (this.props.state.entities.albums.length < 5) {

      return null;

    } else {
      if (this.props.category) { 
        return (
          <ul className="listed">
            {(albs.map(album => <Album key={album.id}
                state={this.props.state} 
                type="albs.map"
                album={album} 
                addSong = {this.props.addSong}
                playSong = {this.props.playSong}
                pauseSong = {this.props.pauseSong}/>))
            }
          </ul>
        );
      } else {
        // debugger
        return (
          <ul className="listed">
            {this.albums.map((album) => <Album key={album.id}
                state={this.props.state} 
                type="albums.map"
                album={album} 
                addSong={this.props.addSong}
                playSong={this.props.playSong}
                pauseSong={this.props.pauseSong}/>) }
          </ul>
        );
      }
    }

  }
}

export default Albums;