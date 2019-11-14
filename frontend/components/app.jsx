import React from 'react';
import SignupFormContainer from './sessions/signup_form_container';
import LoginFormContainer from './sessions/login_form_container';
import DiscoverContainer from './sessions/discover_container';
import ModalContainer from './modals/modal_container';
import SplashContainer from './sessions/splash_container';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LibraryContainer from './library/library_container';
import AlbumShowContainer from './album/album_show_container';
import AlbumsIndexContainer from './album/albums_index_container';
import UsersIndexContainer from './artists/users_index_container';
import UserShowContainer from './artists/user_show_container';
import UploadingContainer from './uploading/uploading_container';
import NavBarContainer from './navbar/navbar_container';
import MediaPlayerContainer from './mediaPlayer/mediaPlayer_container'
import NavBar from './navbar/navbar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.store.getState();
  }


  render() {
    // debugger

    return(
      <div>
        <ProtectedRoute exact path="/albums/:albumId" component={AlbumShowContainer} />
        <ProtectedRoute exact path="/albums" component={AlbumsIndexContainer} />
        <ProtectedRoute exact path="/artists/:artistId" component={UserShowContainer} />  
        <ProtectedRoute exact path="/artists" component={UsersIndexContainer} />  
        <ProtectedRoute path="/discover" component={DiscoverContainer} />
        <ProtectedRoute path="/library" component={LibraryContainer} />
        <ProtectedRoute path="/upload" component={UploadingContainer} />
        <AuthRoute path="/" component={SplashContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Redirect to="/discover" />
        <MediaPlayerContainer />
      </div>
    )

    // if (!this.state.session.id) {
    //   return (
    //     <div>
    //       <AuthRoute path="/" component={SplashContainer} />
    //       <AuthRoute exact path="/login" component={LoginFormContainer} />
    //       <AuthRoute exact path="/signup" component={SignupFormContainer} />
    //       {/* <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
    //       <Route exact path="/albums" component={AlbumsIndexContainer} />
    //       <Route exact path="/artists/:artistId" component={UserShowContainer} />
    //       <Route exact path="/artists" component={UsersIndexContainer} />
    //       <Route exact path="/discover" component={DiscoverContainer} /> */}
    //       <Redirect to="/" />
    //       <MediaPlayerContainer />
    //     </div>
    //   )} else {
    //   return (
    //     <div>
    //       <Switch>
    //         <Route path="/albums/:albumId" component={AlbumShowContainer} />
    //         <Route path="/albums" component={AlbumsIndexContainer} />
    //         <Route path="/artists/:artistId" component={UserShowContainer} />  
    //         <Route path="/artists" component={UsersIndexContainer} />  
    //         <ProtectedRoute path="/discover" component={DiscoverContainer} />
    //         <ProtectedRoute path="/library" component={LibraryContainer} />
    //         <ProtectedRoute path="/upload" component={UploadingContainer} />
    //         <Redirect to="/discover" />
    //       </Switch>
    //       <MediaPlayerContainer />
    //     </div>
    //   )}
    };
  }
export default App;