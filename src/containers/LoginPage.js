'use strict';
import React, { Component } from 'react';
import { signIn } from '../actions/signIn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LoginPage extends Component {
  constructor(){
    super();
    this.state = {
      CurrentUser: ''
    };
  };

  onInputChange = (event) => {
    this.setState({
      CurrentUser: event.target.value
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    // redirect to chat
    this.props.signIn(this.state.CurrentUser);
    console.log('logged as', this.state.CurrentUser);
    this.setState({ CurrentUser:'' });
  };

  render() {
    return (
        <form
          onSubmit={this.onSubmitHandler}
          className='input-group'>
            <input
              onChange={this.onInputChange}
              value={ this.state.CurrentUser }
              placeholder='enter your name to login'
              className='form-control' />
            <span className='input-group-btn'>
              <button type='submit' className='btn btn-secondary'>login</button>
            </span>
        </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signIn }, dispatch);
};

export default connect(null, mapDispatchToProps)(LoginPage);