import { UPDATE_VALUE } from '../actions/types';


const INITIAL_STATE = {
  value : 0,
};
  
const reduce = ( state = INITIAL_STATE, action ) => {
  if( action.type === UPDATE_VALUE ) {
    return {
      ...state,
      value : action.payload
    };
  }
  return state;
};

export default reduce;