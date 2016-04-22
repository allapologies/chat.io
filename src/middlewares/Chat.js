import { SEND_MESSAGE } from '../actions/constants';

export default socket => store => next => action => {
  const result = next(action);
  if (socket && action.type === SEND_MESSAGE) {
    let messages = store.getState().messages;
    socket.emit('message', messages[messages.length -1]);
  }

  return result;
}