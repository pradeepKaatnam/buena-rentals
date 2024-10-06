import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import useStyles from '../Register.styles';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const PersonalInformation: React.FC = () => {
    const classes = useStyles();
    
    return (
        <Grid container spacing={3}>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="first-name" className={classes.formLabel} required>
              First name
            </FormLabel>
            <OutlinedInput
              id="first-name"
              name="first-name"
              type="name"
              placeholder="John"
              autoComplete="first name"
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="last-name" className={classes.formLabel} required>
              Last name
            </FormLabel>
            <OutlinedInput
              id="last-name"
              name="last-name"
              type="last-name"
              placeholder="Snow"
              autoComplete="last name"
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12 }}>
            <FormLabel htmlFor="address1" className={classes.formLabel} required>
              Address line 1
            </FormLabel>
            <OutlinedInput
              id="address1"
              name="address1"
              type="address1"
              placeholder="Street name and number"
              autoComplete="shipping address-line1"
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12 }}>
            <FormLabel htmlFor="address2" className={classes.formLabel}>Address line 2</FormLabel>
            <OutlinedInput
              id="address2"
              name="address2"
              type="address2"
              placeholder="Apartment, suite, unit, etc. (optional)"
              autoComplete="shipping address-line2"
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="city" className={classes.formLabel}  required>
              Email
            </FormLabel>
            <OutlinedInput
              id="city"
              name="city"
              type="city"
              placeholder="New York"
              autoComplete="City"
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="state" className={classes.formLabel} required>
            Nationality
            </FormLabel>
            <OutlinedInput
              id="state"
              name="state"
              type="state"
              placeholder="NY"
              autoComplete="State"
              required
              size="small"
            />
          </FormGrid>
        </Grid>
      );
};

export default PersonalInformation;