import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorReducer from './errors_reducer';
import songsReducer from './songs_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  songs: songsReducer,
  errors: errorReducer
});

export default rootReducer;