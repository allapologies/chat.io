'use strict';
import React, { Component, PropTypes } from 'react';
import LoginPage from './LoginPage';
import MessageForm from './MessageForm';
import MessageList from '../components/MessageList';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/messages';

class AppContainer extends Component {

  static propTypes = {
      sendMessage: PropTypes.func
  };

  render() {
    const { messages, sendMessage} = this.props;

    return (
      <div>
        <LoginPage />
        <MessageList messages={ messages } />
        <MessageForm submit={sendMessage} />
      </div>
    )
  }
}

export default connect((state)=>{
  const { messages } = state;
  return { messages }
}, {
  sendMessage
})(AppContainer);