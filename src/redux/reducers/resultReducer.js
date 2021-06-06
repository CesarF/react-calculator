import { UPDATE_VALUE } from '../actions/types';


const INITIAL_STATE = {
  history : [],
  result  : 0
};
  
export default function reduce( state = INITIAL_STATE, action ) {
  if( action.type === UPDATE_VALUE ) {
    return {
      ...state,
      result : action.payload
    };
  }
  return state;
};