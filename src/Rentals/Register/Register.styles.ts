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

export const RegisterStyles = {
    gridLeftContainer: {
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        borderRight: { sm: 'none', md: '1px solid' },
        borderColor: { sm: 'none', md: 'divider' },
        alignItems: 'start',
        pt: 16,
        px: 10,
        gap: 4,
        backgroundColor: 'black',
      color: 'white',
    },
    rightGridContainer: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        width: '100%',
        backgroundColor: { xs: 'transparent', sm: 'background.default' },
        alignItems: 'start',
        pt: { xs: 6, sm: 16 },
        px: { xs: 2, sm: 10 },
        gap: { xs: 4, md: 8 },
    },
    rightGridBox: {
        display: 'flex',
        justifyContent: { sm: 'space-between', md: 'flex-end' },
        alignItems: 'center',
        width: '100%',
        maxWidth: { sm: '100%', md: 600 },
    },
    stepperBox: {
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexGrow: 1,
    },
    steps: { 
        ':first-child': { pl: 0 }, 
        ':last-child': { pr: 0 },
        '& .MuiStepLabel-root .Mui-completed': {
            color: '#333333',  // Change color of completed steps
        },
        '& .MuiStepLabel-root .Mui-active': {
            color: '#000000', // Change color of active step
        },
        '& .MuiStepLabel-root .MuiStepLabel-label': {
            color: '#666666', // Change color of step labels
        },
    },
    stepperBoxMobile: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      width: '100%',
      maxWidth: { sm: '100%', md: 600 },
      maxHeight: '720px',
      gap: { xs: 5, md: 'none' },
    },
    buttonsBox: {
      display: 'flex',
      flexDirection: { xs: 'column-reverse', sm: 'row' },
      alignItems: 'end',
      flexGrow: 1,
      gap: 1,
      pb: { xs: 12, sm: 0 },
      mt: { xs: 2, sm: 0 },
      mb: '60px',
    },
    loader: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      zIndex: 9999,
  }
}

export default useStyles;