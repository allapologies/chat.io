'use strict';
import React, { Component,  } from 'react';
import Message from '../components/Message';
import { connect } from 'react-redux';

class MessageList extends Component {
  render() {
    const list = this.props.messages.map((message)=>{
      return <Message key={ message.id } message={ message }/>
    });
    return (
      <div className='message-list'>
        <ul className='list-unstyled'>
          { list }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }; 
};

export default connect(mapStateToProps)(MessageList);