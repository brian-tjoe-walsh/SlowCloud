import React from 'react';
import { Link } from 'react-router-dom';
import Album from './album';
import NavBarContainer from '../navbar/navbar_container';

class AlbumsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = {fetchingUsers: false};
    this.filter = this.props.filter;
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchAlbums()
      .then(this.setState({ fetchingUsers: "done" }));
  }


  render() {
    const { users, albums } = this.props;
    const loc= {url: "/albums"};
    if (this.state.fetchingUsers !== "done") {

      return null;

    } else {
      
      return (
        <div>
          <NavBarContainer className="navShow" loc={loc} />
          
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
                      album={albums[idx]}
                      users={users} />)
                  }
                </ul>
              </div> 
              <div className="indexRow">
                <ul className="indexOrganized">
                    { [5, 6, 7, 8, 9].map((idx, index) => <Album type="albums.map"
                      num={idx}
                      key={albums[idx].id}
                      album={albums[idx]}
                      users={users} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                    { [10, 11, 12, 13, 14].map((idx, index) => <Album type="albums.map"
                      num={idx}
                      key={albums[idx].id}
                      album={albums[idx]}
                      users={users} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                    { [15, 16, 17, 18, 19].map((idx, index) => <Album type="albums.map"
                      num={idx}
                      key={albums[idx].id}
                      album={albums[idx]}
                      users={users} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                    { [20, 21, 22, 23, 24].map((idx, index) => <Album type="albums.map"
                      num={idx}
                      key={albums[idx].id}
                      album={albums[idx]}
                      users={users} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                    { [25, 26, 27, 28, 29].map((idx, index) => <Album type="albums.map"
                      num={idx}
                      key={albums[idx].id}
                      album={albums[idx]}
                      users={users} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                    { [30, 31, 32, 33, 34].map((idx, index) => <Album type="albums.map"
                      num={idx}
                      key={albums[idx].id}
                      album={albums[idx]}
                      users={users} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                    { [35, 36, 37, 38, 39].map((idx, index) => <Album type="albums.map"
                      num={idx}
                      key={albums[idx].id}
                      album={albums[idx]}
                      users={users} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                    { [40, 41, 42].map((idx, index) => <Album type="albums.map"
                      num={idx}
                      key={albums[idx].id}
                      album={albums[idx]}
                      users={users} />)
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