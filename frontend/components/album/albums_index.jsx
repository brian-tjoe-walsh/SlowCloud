import React from 'react';
import { Link } from 'react-router-dom';
import Album from './album';
import NavBarContainer from '../navbar/navbar_container';

class AlbumsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {albums: false};
  }

  componentDidMount() {
    this.props.fetchAlbums()
      .then((res) => this.setState({ albums: res.albums }));
  }


  render() {
    const { albums } = this.state;
    const loc= {url: "/albums"};

    if (!albums) {

      return (<div>
        <NavBarContainer loc={loc} />
      </div>)

    } else {
      return (
        <div>     
          <NavBarContainer loc={loc} />     
          <div className="indexBackground">
            <div className="indexMidpage">

              <div className="discoverTitles">
                <h3>All Albums On SlowCloud</h3>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                  { [0, 1, 2, 3, 4].map((idx, index) => <Album type="albums.map"
                    num={idx}
                    key={albums[idx].id}
                    album={albums[idx]} />)
                  }
                </ul>
              </div> 
              <div className="indexRow">
                <ul className="indexOrganized">
                  { [5, 6, 7, 8, 9].map((idx, index) => <Album type="albums.map"
                    num={idx}
                    key={albums[idx].id}
                    album={albums[idx]} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                  { [10, 11, 12, 13, 14].map((idx, index) => <Album type="albums.map"
                    num={idx}
                    key={albums[idx].id}
                    album={albums[idx]} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                  { [15, 16, 17, 18, 19].map((idx, index) => <Album type="albums.map"
                    num={idx}
                    key={albums[idx].id}
                    album={albums[idx]} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                  { [20, 21, 22, 23, 24].map((idx, index) => <Album type="albums.map"
                    num={idx}
                    key={albums[idx].id}
                    album={albums[idx]} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                  { [25, 26, 27, 28, 29].map((idx, index) => <Album type="albums.map"
                    num={idx}
                    key={albums[idx].id}
                    album={albums[idx]} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                  { [30, 31, 32, 33, 34].map((idx, index) => <Album type="albums.map"
                    num={idx}
                    key={albums[idx].id}
                    album={albums[idx]} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                  { [35, 36, 37, 38, 39].map((idx, index) => <Album type="albums.map"
                    num={idx}
                    key={albums[idx].id}
                    album={albums[idx]} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                  { [40, 41, 42].map((idx, index) => <Album type="albums.map"
                    num={idx}
                    key={albums[idx].id}
                    album={albums[idx]} />)
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }

  }
}

export default AlbumsIndex;