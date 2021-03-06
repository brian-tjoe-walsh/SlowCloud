import { combineReducers } from 'redux';

import modal from './modal_reducer';
import mediaPlayer from './mediaPlayer_reducer';
import search from './search_reducer';

const uiReducer = combineReducers({
  modal,
  mediaPlayer,
  search
});

export default uiReducer;