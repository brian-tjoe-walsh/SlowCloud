import React from 'react';
import { Link } from 'react-router-dom';
import User from './user';
import NavBarContainer from '../navbar/navbar_container';

class UsersIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = { fetchingUsers: false };
    this.filter = this.props.filter;
  }

  componentDidMount() {
    this.props.fetchUsers()
      .then(this.setState({ fetchingUsers: "done" }));
  }


  render() {
    const { users } = this.props;
    const loc = { url: "/artists" };
    if (this.state.fetchingUsers !== "done") {

      return null;

    } else {

      return (
        <div>
          <NavBarContainer className="navShow" loc={loc} />

          <div className="indexBackground">
            <div className="indexMidpage">

              <div className="discoverTitles">
                <h3>All Artists On SlowCloud</h3>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                  {[1, 2, 3, 4, 5].map((idx, index) => <User type="albums.map"
                    num={idx}
                    key={users[idx].id}
                    user={users[idx]} />)
                  }
                </ul>
              </div>
              <div className="indexRow">
                <ul className="indexOrganized">
                  {[6, 7, 8, 9, 10].map((idx, index) => <User type="albums.map"
                    num={idx}
                    key={users[idx].id}
                    user={users[idx]} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                  {[11, 12, 13, 14, 15].map((idx, index) => <User type="albums.map"
                    num={idx}
                    key={users[idx].id}
                    user={users[idx]} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                  {[16, 17, 18, 19, 20].map((idx, index) => <User type="albums.map"
                    num={idx}
                    key={users[idx].id}
                    user={users[idx]} />)
                  }
                </ul>
              </div>

              <div className="indexRow">
                <ul className="indexOrganized">
                  {[21, 22, 23, 24, 25].map((idx, index) => <User type="albums.map"
                    num={idx}
                    key={users[idx].id}
                    user={users[idx]} />)
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

export default UsersIndex;