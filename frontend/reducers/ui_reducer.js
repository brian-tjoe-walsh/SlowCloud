import { combineReducers } from 'redux';

import modal from './modal_reducer';
import mediaPlayer from './mediaPlayer_reducer';

const uiReducer = combineReducers({
  modal,
  mediaPlayer
});

export default uiReducer;