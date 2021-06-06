import { useCallback } from 'react';

import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";

import { updateResult } from '../../../../redux/actions/resultActions';
import useButtonStyles from './calculatorButtonStyles';


export const mapDispatchToProps = ( dispatch ) => {
  return bindActionCreators( { updateResult }, dispatch );
};

function CalculatorButton({ symbol, type, updateResult }) {
  const classes = useButtonStyles();

  const executeOperation = useCallback( () => {
    updateResult( symbol, type );
  }, [ updateResult, symbol, type ] );

  return (
    <Button
      className={ classes.button }
      onClick={ executeOperation }
      data-type={ type }
    >
      { symbol }
    </Button>
  );
}

export default connect( null, mapDispatchToProps )( CalculatorButton );