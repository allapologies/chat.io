import { SEND_MESSAGE } from '../actions/constants';
//
// export function chatMiddleware(store) {
//   return next => action => {
//     const result = next(action);
//       console.log('socket sends', socket);
//     if (action.type === SEND_MESSAGE) {
//       let messages = store.getState().messages;
//       socket.emit('message', messages[messages.length -1]);
//     };
//
//     return result;
//   };
// }

export default socket => store => next => action => {
  console.log('in middleware', action);

  const result = next(action);

  if (socket && action.type === SEND_MESSAGE) {
    let messages = store.getState().messages;
    socket.emit('message', messages[messages.length -1]);
  }

  return result;
}