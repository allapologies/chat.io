"use strict";
import { SEND_MESSAGE, ADD_RESPONSE } from './constants';

export function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    payload: message
  };
}

export function addResponse(message) {
  return {
    type: ADD_RESPONSE,
    payload: message
  }
}