import { combineReducers } from 'redux';
import messages from './reducer-messages';
import currentUser from './reducer-currentUser';

export default combineReducers({
  messages,
  currentUser
});