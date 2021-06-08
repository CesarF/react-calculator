import { COMMA_DIGIT, DIGIT_TYPE, OPERATION_TYPE, RESULT_OPERATION, MUTATION_TYPE, SQUARE_OPERATION, CLEAR_OPERATION } from "../../utils/const";
import { UPDATE_VALUE, ERROR, CLEAR_VALUES } from "./types";
import { operators } from './operators';


function processDigit( state, symbol ) {
  state.currentResult = parseFloat( `${ state.currentResult }${ state.decimal ? '.' : '' }${ symbol }` );
  state.result = state.currentResult;
  state.decimal = false;
  return state;
}

function processOperation( state, symbol ) {
  // In case we should process result
  if( symbol === RESULT_OPERATION ) {
    const operation = operators[ state.operator ];
    if( !operation ) {
      throw Error( "Not valid operation" );
    }
    state.result = operation( state.lastResult, state.currentResult );
    state.lastResult = state.currentResult;
    state.currentResult = state.result;
  }
  else {
    state.lastResult = state.currentResult;
    state.currentResult = 0;
    state.operator = symbol;
    state.history.push( state.lastResult );
  }
  state.decimal = false;
  state.history.push( symbol );
  return state;
}

function processMutation( state, symbol ) {
  if( symbol === COMMA_DIGIT && state.currentResult % 1 === 0 ) {
    state.decimal = true;
  }
  else if( symbol === SQUARE_OPERATION ) {
    state.currentResult = state.currentResult * state.currentResult;
    state.result = state.currentResult;
  }
  return state;
}

const operationManagers = {
  [ DIGIT_TYPE ]     : processDigit,
  [ OPERATION_TYPE ] : processOperation,
  [ MUTATION_TYPE ]  : processMutation
}

export const updateResult = ( symbol, type ) => async ( dispatch, getState ) => {
  try {
    let state = getState().resultReducer;
    if( symbol === CLEAR_OPERATION ) {
      return dispatch({
        type : CLEAR_VALUES
      });
    }
    return dispatch({
      type    : UPDATE_VALUE,
      payload : {
        ...operationManagers[ type ]( state, symbol )
      }
    });
  }
  catch ( error ) {
    console.log( 'Error: ', error.message );
    dispatch({
      type    : ERROR,
      payload : error.message
    });
  }
}