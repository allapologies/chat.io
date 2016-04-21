import { SEND_MESSAGE, ADD_RESPONSE } from '../actions/constants';

export default (state = [], action) => {
  const { type, payload }= action;
  var newMessage;
  switch (type) {
    case SEND_MESSAGE:
      newMessage ={ id: Date.now(), text: payload.text, author: payload.user };
      return state.concat(newMessage);

    case ADD_RESPONSE:
      newMessage ={ id: Date.now(), text: payload.text, author: payload.author };
      return state.concat(newMessage);
  }
  
  return state;
}