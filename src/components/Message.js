'use strict';
import React from 'react';

export default (props) => {
  return <li key={props.message.id} className='message-item'>{props.message.author}: {props.message.text}</li>
}