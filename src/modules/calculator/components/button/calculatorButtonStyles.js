import { makeStyles } from '@material-ui/core';


const useButtonStyles = makeStyles(
  () => ({
    button : {
      color: 'white',
      "&[data-type='operation']" : {
        backgroundColor: 'orange',
      },
      "&[data-type='digit'],&[data-type='mutation']" : {
        backgroundColor: 'black',
      },
      "&:hover":{
        backgroundColor: 'gray',
      }
    },
  })
);
export default useButtonStyles;