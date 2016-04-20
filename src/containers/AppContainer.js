'use strict';
import React, { Component, PropTypes } from 'react';
import LoginPage from './LoginPage';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

class AppContainer extends Component {

  render() {
    return (
      <div>
        <LoginPage />
        <MessageList />
        <MessageForm />
      </div>
    )
  }
}

export default AppContainer;