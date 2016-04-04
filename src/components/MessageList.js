'use strict';
import React from 'react';
import Message from './Message';

export default (props) => {
  const list = props.messages.map((message)=>{
    return <Message message={ message }/>
  });
  
  return (
    <div className='message-list'>
      <ul className='list-unstyled'>
        { list }
      </ul>
    </div>
  );
}