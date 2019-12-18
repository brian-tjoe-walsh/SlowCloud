import React from 'react';
import DiscoverContainer from './sessions/discover_container';
import SplashContainer from './sessions/splash_container';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LibraryContainer from './library/library_container';
import AlbumShowContainer from './album/album_show_container';
import AlbumsIndexContainer from './album/albums_index_container';
import UsersIndexContainer from './artists/users_index_container';
import UserShowContainer from './artists/user_show_container';
import UploadingContainer from './uploading/uploading_container';
import MediaPlayerContainer from './mediaPlayer/mediaPlayer_container';
import Modal from '../components/modals/modal';
import SearchContainer from './search/searchPage_container';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.store.getState();
  }


  render() {
    return(
      <div>
        <Modal />
        <Switch>
          <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
          <Route exact path="/albums" component={AlbumsIndexContainer} />
          <Route exact path="/artists/:artistId" component={UserShowContainer} />  
          <Route exact path="/artists" component={UsersIndexContainer} />  
          <Route path="/search/:searchedItem" component={SearchContainer} />
          <Route path="/discover" component={DiscoverContainer} />
          <ProtectedRoute path="/library" component={LibraryContainer} />
          <ProtectedRoute path="/upload" component={UploadingContainer} />
          <AuthRoute path="/" component={SplashContainer} />
          <Redirect to="/discover" />
        </Switch>
        <MediaPlayerContainer />
      </div>
    )
  };
}

export default App;