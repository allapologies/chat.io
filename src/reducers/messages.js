import { SEND_MESSAGE } from '../actions/constants';
import { messages } from '../fixtures';

export default (state = messages, action) => {
  const { type, payload }= action;
  switch (type) {
    case SEND_MESSAGE: {
      const newMessage ={ id: Date.now(), text: payload, author: "Sam" };
      return state.concat(newMessage);
    }
  };
  
  return state;
}