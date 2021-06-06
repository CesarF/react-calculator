import { UPDATE_VALUE } from "./types";


export const updateResult = ( symbol, type ) => async ( dispatch, getState ) => {

  console.log( symbol );
  console.log( type );

  const { value } = getState().resultReducer;
  return dispatch({
    type    : UPDATE_VALUE,
    payload : value + 1
  });
}