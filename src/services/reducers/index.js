import {combineReducers} from 'redux';
import postReducer from './PostReducer';
import userReducer from './UserReducer';

const appReducer = combineReducers({
  /* your appÃ¢â‚¬â„¢s top-level reducers */
  postReducer,
  userReducer,
});

export default appReducer;