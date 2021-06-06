import { connect } from 'react-redux';


export const mapToStateProps = ( state ) => ({
  result : state.resultReducer?.result
});

function OutputResult({ result }) {
  return (
    <p>{ result }</p>
  )
}

export default connect( mapToStateProps )( OutputResult );
