"use strict";
import { SEND_MESSAGE, GET_MESSAGE } from './constants';

export function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    payload: message
  }
}
//
// export function getMessage(message) {
//   return {
//     type: GET_MESSAGE,
//     payload: { message }
//   }
// }