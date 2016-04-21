'use strict';
import React, { Component, PropTypes } from 'react';
import LoginPage from './LoginPage';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import { connect }from 'react-redux';

class AppContainer extends Component {
  render() {

    const { currentUser } = this.props;
    if (!currentUser) {
      return (
        <div className='loginBox'>
          <LoginPage />
        </div>
      );
    }

    return (
      <div>
        <h3>Logged as: {currentUser}</h3>
        <MessageList />
        <MessageForm />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(AppContainer);