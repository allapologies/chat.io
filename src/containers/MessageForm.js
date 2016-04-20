'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../actions/messages';

class MessageForm extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  };  
  
  onInputChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    // implement action to emit message
    console.log('Sending message from user', this.state.currentUser );
    this.props.sendMessage({user: this.props.currentUser, text:this.state.text });
    this.setState({ text:'' });
  };

  render() {
    return (
      <div>
        <form
          className='input-group'
          onSubmit={ this.onSubmitHandler }>
          <input
            value={ this.state.text }
            onChange={ this.onInputChange }
            className='form-control'
            placeholder='type your message here...'
          />
          <span className='input-group-btn'>
            <button type='submit' className='btn btn-secondary'>Send</button>
          </span>
        </form>
      </div>
    );
  };
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);