import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formLabel: {
      marginBottom: '8px',
      alignSelf: 'start',
    },
    textField: {
      marginBottom: '16px', // Add some styles for textField
    },
  })
);

export default useStyles;