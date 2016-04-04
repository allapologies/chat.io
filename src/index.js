'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MessageForm from './containers/MessageForm';
import MessageList from './components/MessageList';
import { messages } from './fixtures';

class App extends Component {
  render() {
    return (
      <div>
        <MessageList messages={ messages } />
        <MessageForm />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container') );