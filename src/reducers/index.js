import { combineReducers } from 'redux';
import messages from './messages';
import currentUser from './reducer-currentUser';

export default combineReducers({
  messages,
  currentUser
});