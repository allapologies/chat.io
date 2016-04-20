'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root'
import store from './store/index';

ReactDOM.render(<Root store={ store }/>, document.querySelector('.container') );