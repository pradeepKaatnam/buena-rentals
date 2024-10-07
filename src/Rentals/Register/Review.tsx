import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
import { IRegisterProps, IReviewProps } from './Register.models';

const Review: React.FC<IReviewProps> = (props: IReviewProps) => {
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
                color: 'primary.main',
            }}>
            Personal Information
          </Typography>
          <Typography gutterBottom>{props.personalInformation.firstName} {props.personalInformation.lastName}</Typography>
          <Typography gutterBottom sx={{ color: 'text.secondary' }}>
            {props.personalInformation.addressLine1}
            {props.personalInformation.addressLine2 && `, ${props.personalInformation.addressLine2}`}
          </Typography>
          <Typography gutterBottom>{props.personalInformation.email}</Typography>
          <Typography gutterBottom>{props.personalInformation.nationality}</Typography>
        </div>
        <div>
          <Typography variant="subtitle2" gutterBottom sx={{
                fontWeight: 'bold',
                marginBottom: 2,
                color: 'primary.main',
            }}>
            Financial Information
          </Typography>
          <Grid container>
          {Object.entries(props.financialInformation).map(([key, value], index) => (
                <Stack
                key={index}
                direction="row"
                spacing={1}
                useFlexGap
                sx={{ width: '100%', mb: 1 }}
              >
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </Typography>
                <Typography variant="body2" style={{ marginTop: '2px' }}>
                  {value}
                </Typography>
              </Stack>
            ))}
          </Grid>
        </div>
      </Stack>
    );
};

export default Review;