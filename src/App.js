import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { updateValue } from './redux/actions/helloActions';
import useAppStyles from './appStyles';

const { Button } = require( "@material-ui/core" );


export const mapToStateProps = ( state ) => ({
  value : state.helloReducer.value
});

export const mapDispatchToProps = ( dispatch ) => {
  return bindActionCreators({ updateValue }, dispatch );
};

function App( { value, updateValue } ) {
  const classes = useAppStyles();
   
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Developed by CesarF
        </p>
      </header>
      <main>
        <p>{ value }</p>
        <Button
          className={ classes.button }
          onClick={ updateValue }
        >
          +
        </Button>
      </main>
    </div>
  );
}

export default connect( mapToStateProps, mapDispatchToProps )( App );
