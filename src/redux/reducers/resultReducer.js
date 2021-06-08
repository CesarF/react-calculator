import { ERROR, UPDATE_VALUE, CLEAR_VALUES } from '../actions/types';

/*
  currentResult and lastResult are in memory numbers to be processed, 
  result in the current result in view. We should not use result to calculate, it is only to be used in views.
*/
const INITIAL_STATE = {
  history      : [],
  lastResult   : 0,
  currentResult: 0,
  result       : 0,
  operator     : undefined,
  error        : undefined,
  decimal      : false
};
  
export default function reduce( state, action ) {
  if( state === undefined ) {
    state = INITIAL_STATE;
  }
  if( action.type === UPDATE_VALUE ) {
    return {
      ...state,
      ...action.payload
    };
  }
  if( action.type === CLEAR_VALUES ) {
    return { ...INITIAL_STATE };
  }
  if( action.type === ERROR ) {
    return {
      ...state,
      error: action.payload
    };
  }
  return { ...state };
};