import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
import { IReviewProps } from './Register.models';

const Review: React.FC<IReviewProps> = (props: IReviewProps) => {
    const employmentStatusMap: { [key: number]: string } = {
        1: 'Employed',
        2: 'Self-employed',
        3: 'Student',
        4: 'Other',
      };

    return (
        <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle2" gutterBottom sx={{
                fontWeight: 'bold',
                marginBottom: 2,
                color: 'black',
            }}>
            Personal Information
          </Typography>
          <Typography gutterBottom>{props.personalInformation.firstName.value} {props.personalInformation.lastName.value}</Typography>
          <Typography gutterBottom sx={{ color: 'text.secondary' }}>
            {props.personalInformation.addressLine1.value}
            {props.personalInformation.addressLine2.value && `, ${props.personalInformation.addressLine2.value}`}
          </Typography>
          <Typography gutterBottom>{props.personalInformation.email.value}</Typography>
          <Typography gutterBottom>{props.personalInformation.nationality.value}</Typography>
        </div>
        <div>
          <Typography variant="subtitle2" gutterBottom sx={{
                fontWeight: 'bold',
                marginBottom: 2,
                color: 'black',
            }}>
            Financial Information
          </Typography>
          <Grid container>
            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{ width: '100%', mb: 1 }}
                >
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                     Employment Status:
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: '2px' }}>
                    {employmentStatusMap[Number(props.financialInformation.employmentStatus.value)]}
                    </Typography>
            </Stack>
            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{ width: '100%', mb: 1 }}
                >
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                     Occupation:
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: '2px' }}>
                    {props.financialInformation.occupation.value}
                    </Typography>
            </Stack>
            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{ width: '100%', mb: 1 }}
                >
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                     Employer:
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: '2px' }}>
                    {props.financialInformation.employer.value}
                    </Typography>
            </Stack>
            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{ width: '100%', mb: 1 }}
                >
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                     Work Duration:
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: '2px' }}>
                    {props.financialInformation.workDuration.value}
                    </Typography>
            </Stack>
            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{ width: '100%', mb: 1 }}
                >
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                     Salary Indication:
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: '2px' }}>
                    {props.financialInformation.salaryIndication.value}
                    </Typography>
            </Stack>
          </Grid>
        </div>
      </Stack>
    );
};

export default Review;