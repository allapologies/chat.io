'use strict';
import React, { Component } from 'react';

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

export default MessageForm;