'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root'
import chatMiddleware from './middlewares/Chat';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import DevTools from './containers/DevTools';
import io from 'socket.io-client';
import { addResponse } from './actions/messages';

const socket = io.connect(`${location.protocol}//${location.hostname}:3001`);
const enhancer = compose(
  applyMiddleware(chatMiddleware(socket)),
  DevTools.instrument()
);
const store = createStore(reducers, {}, enhancer);
socket.on('message', message => {
  store.dispatch(addResponse(message));
});

ReactDOM.render(<Root store={ store }/>, document.querySelector('.container') );