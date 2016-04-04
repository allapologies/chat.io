'use strict';
import React, { Component } from 'react';
import MessageForm from './MessageForm';
import MessageList from '../components/MessageList';
import { messages } from '../fixtures';

class AppContainer extends Component {
  render() {
    return (
      <div>
        <MessageList messages={ messages } />
        <MessageForm />
      </div>
    )
  }
}

export default AppContainer;