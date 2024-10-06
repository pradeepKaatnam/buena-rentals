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
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        borderRight: '1px solid',
        borderColor: theme.palette.divider,
        alignItems: 'start',
        paddingTop: theme.spacing(16),
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
        gap: theme.spacing(4),
        [theme.breakpoints.down('md')]: {
          display: 'none',
        },
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      },
  })
);

export const gridStyles = {
    
}

export default useStyles;