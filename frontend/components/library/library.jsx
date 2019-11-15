import React from 'react';
import Trending from '../trending/trending_container';
import Albums from '../album/albums_container';
import NavBarContainer from '../navbar/navbar_container';
import UserShowContainer from '../artists/user_show_container';

class Library extends React.Component {
  render() {
    const loc = { url: "/library" };
    return (
      <div className="discoverWebPage">
        <NavBarContainer loc={loc} />

        <UserShowContainer artistId={this.props.currentUser.id}/>
      </div>
    )
  }
}

export default Library;