import React from 'react';
import {Redirect} from 'react-router-dom';
import Modal from '../modals/modal_container';
import Songs from '../songs/songs_container';

class Trending extends React.Component {
  

  render() {
    return(
      <div>
        < Songs />
      </div>
    );
  }

}

export default Trending;