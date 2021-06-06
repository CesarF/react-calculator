import { UPDATE_VALUE } from "./types";


export const updateValue = () => async ( dispatch, getState ) => {
  const { value } = getState().helloReducer;
  return dispatch({
    type    : UPDATE_VALUE,
    payload : value + 1
  });
}