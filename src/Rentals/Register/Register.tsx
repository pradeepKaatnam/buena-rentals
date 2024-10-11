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
import useStyles, { RegisterStyles } from './Register.styles';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import { useInit } from './Register.hooks';
import { validateFinancialInformation, validatePersonalInformation } from '../../common/utilities/form-utilities';
import { CircularProgress } from '@mui/material';

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

    const handleNext = async () => {
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

        if(activeStep === 2) {
            await actions.register(state.personalInformation, state.financialInformation);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const onFormChange = (formType: string, key: string, value: string) => {    
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
        {state.loading && (
            <Box sx={RegisterStyles.loader}>
                <CircularProgress />
            </Box>
        )}
        <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }}>
          <Grid
            size={{ xs: 12, sm: 5, lg: 4 }}
            sx={RegisterStyles.gridLeftContainer}
          >
            <RentalsInfo/>
          </Grid>
          <Grid
            size={{ sm: 12, md: 7, lg: 8 }}
            sx={RegisterStyles.rightGridContainer}
          >
            <Box
              sx={RegisterStyles.rightGridBox}
            >
              <Box
                sx={RegisterStyles.stepperBox}
              >
                <Stepper
                  id="desktop-stepper"
                  activeStep={activeStep}
                  sx={{ width: '100%', height: 40 }}
                >
                  {steps.map((label) => (
                    <Step
                      sx={RegisterStyles.steps}
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
                  backgroundColor: 'black',
                  color: 'white',
                }}
              >
                <RentalsInfo/>
              </CardContent>
            </Card>
            <Box
              sx={RegisterStyles.stepperBoxMobile}
            >
              <Stepper
                id="mobile-stepper"
                activeStep={activeStep}
                alternativeLabel
                sx={{ display: { sm: 'flex', md: 'none' } }}
              >
                {steps.map((label) => (
                  <Step
                    sx={RegisterStyles.steps}
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
                  <Typography variant="h1">🎉</Typography>
                  <Typography variant="h5">Thank you for registering!</Typography>
                  <br/>
                  <Button
                    variant="contained"
                    sx={{ alignSelf: 'start', width: { xs: '100%', sm: 'auto' }, backgroundColor: 'black',}}
                  >
                    Go to rentals
                  </Button>
                </Stack>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box
                    sx={[
                      RegisterStyles.buttonsBox,
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
                        style={{ color: 'black' }}
                      >
                        Previous
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      endIcon={activeStep < steps.length - 1 && <ChevronRightRoundedIcon /> }
                      onClick={handleNext}
                      sx={{ width: { xs: '100%', sm: 'fit-content', backgroundColor: 'black',
                        color: 'white' } }}
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