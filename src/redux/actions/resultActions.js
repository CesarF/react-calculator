import { DIGIT_TYPE, OPERATION_TYPE, RESULT_OPERATION } from "../../utils/const";
import { UPDATE_VALUE, ERROR } from "./types";
import { operators } from './operators';


export const updateResult = ( symbol, type ) => async ( dispatch, getState ) => {
  try {
    let { result, inMemory, operator, history } = getState().resultReducer;
    // If user clicked on a number
    if( type === DIGIT_TYPE ) {
      if( operator ) {
        result = 0;
      }
      result = parseInt( `${ result }${ symbol }` );
    }
    // If user clicked on an operation button
    else if( type === OPERATION_TYPE ) {
      // In case we should process result
      if( symbol === RESULT_OPERATION ) {
        const operation = operators[ operator ];
        if( !operation ) {
          throw Error( "Not valid operation" );
        }
        result = operation( inMemory, result );
      }
      else {
        inMemory = result;
        operator = symbol;
        history.push( inMemory );
      }
      history.push( symbol );
    }

    return dispatch({
      type    : UPDATE_VALUE,
      payload : {
        result,
        inMemory,
        operator
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