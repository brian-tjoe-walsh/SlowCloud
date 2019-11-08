import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup} from './util/session_api_util';
import {fetchSongs, fetchSong, createSong, updateSong, deleteSong} from './util/song_api_util';
import {fetchUsers} from './actions/user_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.fetchUsers = fetchUsers;
  window.fetchSongs = fetchSongs;
  window.fetchSong = fetchSong;
  window.createSong = createSong;
  window.updateSong = updateSong;
  window.deleteSong = deleteSong;
  window.store = store;
  window.dispatch = store.dispatch;
  window.store.login = login;
  window.store.logout = logout;
  window.store.signup = signup;
  window.getState = store.getState();
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});