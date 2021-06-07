import { ERROR, UPDATE_VALUE } from '../actions/types';


const INITIAL_STATE = {
  history : [],
  inMemory: 0,
  result  : 0,
  operator: undefined,
  error: undefined
};
  
export default function reduce( state = INITIAL_STATE, action ) {
  if( action.type === UPDATE_VALUE ) {
    return {
      ...state,
      ...action.payload
    };
  }
  if( action.type === ERROR ) {
    return {
      ...state,
      error: action.payload
    };
  }
  return state;
};