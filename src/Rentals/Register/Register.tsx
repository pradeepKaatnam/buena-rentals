import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import RentalsInfo from './RentalsInfo';
import PersonalInformation from './Forms/PersonalInformation';
import FinancialInformation from './Forms/FinancialInformation';
import Review from './Review';
import useStyles from './Register.styles';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import { useInit } from './Register.hooks';
import { validateFinancialInformation, validatePersonalInformation } from '../../common/utilities/form-utilities';

const Register: React.FC = () => {
    const steps = ['Personal Info', 'Financial Info', 'Review'];
    const [activeStep, setActiveStep] = React.useState(0);
    const { state, actions } = useInit();
    const classes = useStyles();

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <PersonalInformation formData={state.personalInformation} onFormChange={onFormChange} />;
            case 1:
                return <FinancialInformation formData={state.financialInformation} onFormChange={onFormChange} />;
            case 2:
                return <Review personalInformation={state.personalInformation} financialInformation={state.financialInformation} />;
            default:
                return 'Unknown step';
        }
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    const handleNext = () => {
        if(activeStep === 0) {
            const isValidForm = validatePersonalInformation(state.personalInformation);
            if(!isValidForm) {
                actions.updatePersonalInformation(state.personalInformation);
                return;
            }
        } else if (activeStep === 1) {
            const isValidForm = validateFinancialInformation(state.financialInformation);
            if(!isValidForm) {
                actions.updateFinancialInformation(state.financialInformation);
                return;
            }
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const onFormChange = (formType: string, key: string, value: string) => {    
        console.log('formType', formType, 'key', key, 'value', value);
        var formField = {
            value: value,
            error: value === '' ? 'This field is required' : ''
        };
        if(formType === 'personalInformation') {
            actions.updatePersonalInformationEntry(key, formField);
        } else {
            actions.updateFinancialInformationEntry(key, formField);
        }
    }

    return <>
        <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }}>
          <Grid
            size={{ xs: 12, sm: 5, lg: 4 }}
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              backgroundColor: 'background.paper',
              borderRight: { sm: 'none', md: '1px solid' },
              borderColor: { sm: 'none', md: 'divider' },
              alignItems: 'start',
              pt: 16,
              px: 10,
              gap: 4,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                width: '100%',
                maxWidth: 500,
              }}
            >
                <RentalsInfo/>
            </Box>
          </Grid>
          <Grid
            size={{ sm: 12, md: 7, lg: 8 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '100%',
              width: '100%',
              backgroundColor: { xs: 'transparent', sm: 'background.default' },
              alignItems: 'start',
              pt: { xs: 6, sm: 16 },
              px: { xs: 2, sm: 10 },
              gap: { xs: 4, md: 8 },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: { sm: 'space-between', md: 'flex-end' },
                alignItems: 'center',
                width: '100%',
                maxWidth: { sm: '100%', md: 600 },
              }}
            >
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  flexGrow: 1,
                }}
              >
                <Stepper
                  id="desktop-stepper"
                  activeStep={activeStep}
                  sx={{ width: '100%', height: 40 }}
                >
                  {steps.map((label) => (
                    <Step
                      sx={{ ':first-child': { pl: 0 }, ':last-child': { pr: 0 } }}
                      key={label}
                    >
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Box>
            <Card sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}>
              <CardContent
                sx={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <Typography variant="subtitle2" gutterBottom>
                    Selected products
                  </Typography>
                  <Typography variant="body1">
                    {activeStep >= 2 ? '$144.97' : '$134.98'}
                  </Typography>
                </div>
                {/* <InfoMobile totalPrice={activeStep >= 2 ? '$144.97' : '$134.98'} /> */}
              </CardContent>
            </Card>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                width: '100%',
                maxWidth: { sm: '100%', md: 600 },
                maxHeight: '720px',
                gap: { xs: 5, md: 'none' },
              }}
            >
              <Stepper
                id="mobile-stepper"
                activeStep={activeStep}
                alternativeLabel
                sx={{ display: { sm: 'flex', md: 'none' } }}
              >
                {steps.map((label) => (
                  <Step
                    sx={{
                      ':first-child': { pl: 0 },
                      ':last-child': { pr: 0 },
                      '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
                    }}
                    key={label}
                  >
                    <StepLabel
                      sx={{ '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length ? (
                <Stack spacing={2} useFlexGap>
                  <Typography variant="h1">📦</Typography>
                  <Typography variant="h5">Thank you for registering!</Typography>
                  <Button
                    variant="contained"
                    sx={{ alignSelf: 'start', width: { xs: '100%', sm: 'auto' } }}
                  >
                    Go to rentals
                  </Button>
                </Stack>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box
                    sx={[
                      {
                        display: 'flex',
                        flexDirection: { xs: 'column-reverse', sm: 'row' },
                        alignItems: 'end',
                        flexGrow: 1,
                        gap: 1,
                        pb: { xs: 12, sm: 0 },
                        mt: { xs: 2, sm: 0 },
                        mb: '60px',
                      },
                      activeStep !== 0
                        ? { justifyContent: 'space-between' }
                        : { justifyContent: 'flex-end' },
                    ]}
                  >
                    {activeStep !== 0 && (
                      <Button
                        startIcon={<ChevronLeftRoundedIcon />}
                        onClick={handleBack}
                        variant="text"
                        sx={{ display: { xs: 'none', sm: 'flex' } }}
                      >
                        Previous
                      </Button>
                    )}
                    {activeStep !== 0 && (
                      <Button
                        startIcon={<ChevronLeftRoundedIcon />}
                        onClick={handleBack}
                        variant="outlined"
                        fullWidth
                        sx={{ display: { xs: 'flex', sm: 'none' } }}
                      >
                        Previous
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      endIcon={<ChevronRightRoundedIcon />}
                      onClick={handleNext}
                      sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                    >
                      {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Box>
          </Grid>
        </Grid>
    </>;
};

export default Register;