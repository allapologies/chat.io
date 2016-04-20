import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';
import messageEmitter from '../middlewares/messageEmitter';
import DevTools from '../containers/DevTools';

const enhancer = compose(
  applyMiddleware(messageEmitter),
  DevTools.instrument()
);

const store = createStore(reducers, {}, enhancer);

window.store = store;

export default store;