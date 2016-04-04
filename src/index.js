'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MessageForm  from './containers/MessageForm';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Chat</h1>
        <MessageForm />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container') );