import { DIGIT_TYPE, OPERATION_TYPE, RESULT_OPERATION } from "../../utils/const";
import { UPDATE_VALUE, ERROR } from "./types";
import { operators } from './operators';


export const updateResult = ( symbol, type ) => async ( dispatch, getState ) => {
  try {
    let { result, lastResult, currentResult, operator, history } = getState().resultReducer;
    // If user clicked on a number
    if( type === DIGIT_TYPE ) {
      currentResult = parseInt( `${ currentResult }${ symbol }` );
      result = currentResult;
    }
    // If user clicked on an operation button
    else if( type === OPERATION_TYPE ) {
      // In case we should process result
      if( symbol === RESULT_OPERATION ) {
        const operation = operators[ operator ];
        if( !operation ) {
          throw Error( "Not valid operation" );
        }
        result = operation( lastResult, currentResult );
        lastResult = currentResult;
        currentResult = result;
      }
      else {
        lastResult = currentResult;
        currentResult = 0;
        operator = symbol;
        history.push( lastResult );
      }
      history.push( symbol );
    }

    return dispatch({
      type    : UPDATE_VALUE,
      payload : {
        result,
        lastResult,
        currentResult,
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