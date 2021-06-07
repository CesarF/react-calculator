import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';


export const mapToStateProps = ( state ) => ({
  result : state.resultReducer?.result,
  error  : state.resultReducer?.error
});

function OutputResult({ result, error }) {
  return (
    <Grid
      container
      direction="row"
    >
      <h1>{ result }</h1>
      <label>{ error }</label>
    </Grid>
  )
}

export default connect( mapToStateProps )( OutputResult );
