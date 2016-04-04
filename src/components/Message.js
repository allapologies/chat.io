'use strict';
import React from 'react';

export default (props) => {
  return <li className='message-item'><strong>{props.message.author}</strong>: {props.message.text}</li>
}