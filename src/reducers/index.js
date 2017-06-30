import { combineReducers } from 'redux';
import commentsReducer from './comments';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  //comments: (state = []) => state;
  comments: commentsReducer
});

export default rootReducer;
