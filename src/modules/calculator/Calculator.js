import { Grid } from "@material-ui/core";

import {
  ADD_OPERATION,
  CLEAR_OPERATION,
  COMMA_DIGIT,
  DIGIT_TYPE,
  DIVIDE_OPERATION,
  EIGTH_DIGIT,
  EMPTY_SLOT,
  FIVE_DIGIT,
  FOUR_DIGIT,
  MULTIPLY_OPERATION,
  MUTATION_TYPE,
  NINE_DIGIT,
  ONE_DIGIT,
  OPERATION_TYPE,
  RESULT_OPERATION,
  SEVEN_DIGIT,
  SIX_DIGIT,
  SQUARE_OPERATION,
  SUBSTRACT_OPERATION,
  THREE_DIGIT,
  TWO_DIGIT,
  ZERO_DIGIT
} from "../../utils/const";

import CalculatorButton from "./components/button/CalculatorButton";
import OutputResult from "./components/ouput/OutputResult";
import useCalculatorStyles from './calculatorStyles';

// TODO line lenght are not correct
const calculatorMatrix = [
  [ { symbol: CLEAR_OPERATION, type: MUTATION_TYPE }, { symbol: EMPTY_SLOT },                            { symbol: EMPTY_SLOT },                       { symbol: DIVIDE_OPERATION, type: OPERATION_TYPE }     ],
  [ { symbol: SEVEN_DIGIT, type: DIGIT_TYPE },        { symbol: EIGTH_DIGIT, type: DIGIT_TYPE },         { symbol: NINE_DIGIT, type: DIGIT_TYPE },     { symbol: MULTIPLY_OPERATION, type: OPERATION_TYPE }   ],
  [ { symbol: FOUR_DIGIT, type: DIGIT_TYPE },         { symbol: FIVE_DIGIT, type: DIGIT_TYPE },          { symbol: SIX_DIGIT, type: DIGIT_TYPE },      { symbol: SUBSTRACT_OPERATION, type: OPERATION_TYPE }  ],
  [ { symbol: ONE_DIGIT, type: DIGIT_TYPE },          { symbol: TWO_DIGIT, type: DIGIT_TYPE },           { symbol: THREE_DIGIT, type: DIGIT_TYPE },    { symbol: ADD_OPERATION, type: OPERATION_TYPE }        ],
  [ { symbol: ZERO_DIGIT, type: DIGIT_TYPE },         { symbol: SQUARE_OPERATION, type: MUTATION_TYPE }, { symbol: COMMA_DIGIT, type: MUTATION_TYPE }, { symbol: RESULT_OPERATION, type: OPERATION_TYPE }     ]
]

function Calculator() {
  const classes = useCalculatorStyles();
  return (
    <Grid
      container
      justify='center'
      alignItems='center'
    >
      <div className={ classes.calculator }>
        <OutputResult/>
        <Grid
          container
          direction="column"
          justify="space-between"
        >
          { calculatorMatrix.map( row => 
            <Grid
              container
              direction="row"
            >
              { row.map( button =>
                <Grid
                  item
                  xs={ 3 }
                >
                  { button.symbol === EMPTY_SLOT 
                    ? <></>
                    : <CalculatorButton
                      symbol={ button.symbol }
                      type = { button.type }
                    />
                  }
                </Grid>
              )}
            </Grid>
          )}
        </Grid>
      </div>
    </Grid>
  )
}

export default Calculator;
