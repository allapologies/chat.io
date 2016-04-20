import { SIGN_IN } from '../actions/constants';

export default function(state=null, action){
  switch (action.type) {
    case SIGN_IN:
      return action.payload;
  }
  return state;
};