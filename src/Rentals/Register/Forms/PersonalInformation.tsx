import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import useStyles from '../Register.styles';
import { IPersonalInformationProps } from '../Register.models';
import { FormHelperText } from '@mui/material';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));
  
const PersonalInformation: React.FC<IPersonalInformationProps> = (props: IPersonalInformationProps) => {
    const classes = useStyles();
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onFormChange && props.onFormChange('personalInformation', event.target.name, event.target.value);
    }

    return (
        <Grid container spacing={3}>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="first-name" className={classes.formLabel} required>
              First name
            </FormLabel>
            <OutlinedInput
              id="first-name"
              name="firstName"
              type="name"
              placeholder="John"
              autoComplete="first name"
              required
              size="small"
              value={props.formData.firstName.value}
              onChange={onChange}
            />
            {props.formData.firstName.error && <FormHelperText sx={{ color: 'red' }}>{props.formData.firstName.error}</FormHelperText>}
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="last-name" className={classes.formLabel} required>
              Last name
            </FormLabel>
            <OutlinedInput
              id="last-name"
              name="lastName"
              type="last-name"
              placeholder="Snow"
              autoComplete="last name"
              required
              size="small"
              onChange={onChange}
              value={props.formData.lastName.value}
            />
            {props.formData.lastName.error && <FormHelperText sx={{ color: 'red' }}>{props.formData.lastName.error}</FormHelperText>}
          </FormGrid>
          <FormGrid size={{ xs: 12 }}>
            <FormLabel htmlFor="address1" className={classes.formLabel} required>
              Address line 1
            </FormLabel>
            <OutlinedInput
              id="address1"
              name="addressLine1"
              type="address1"
              placeholder="Street name and number"
              autoComplete="shipping address-line1"
              required
              size="small"
              onChange={onChange}
              value={props.formData.addressLine1.value}
            />
            {props.formData.addressLine1.error && <FormHelperText sx={{ color: 'red' }}>{props.formData.addressLine1.error}</FormHelperText>}
          </FormGrid>
          <FormGrid size={{ xs: 12 }}>
            <FormLabel htmlFor="address2" className={classes.formLabel}>Address line 2</FormLabel>
            <OutlinedInput
              id="address2"
              name="addressLine2"
              type="address2"
              placeholder="Apartment, suite, unit, etc. (optional)"
              autoComplete="shipping address-line2"
              required
              size="small"
              onChange={onChange}
              value={props.formData.addressLine2?.value}
            />
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="city" className={classes.formLabel}  required>
              Email
            </FormLabel>
            <OutlinedInput
              id="city"
              name="email"
              type="city"
              placeholder="New York"
              autoComplete="City"
              required
              size="small"
              onChange={onChange}
              value={props.formData.email.value}
            />
            {props.formData.email.error && <FormHelperText sx={{ color: 'red' }}>{props.formData.email.error}</FormHelperText>}
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="state" className={classes.formLabel} required>
            Nationality
            </FormLabel>
            <OutlinedInput
              id="nationality"
              name="nationality"
              type="nationality"
              required
              size="small"
              onChange={onChange}
              value={props.formData.nationality.value}
            />
            {props.formData.nationality.error && <FormHelperText sx={{ color: 'red' }}>{props.formData.nationality.error}</FormHelperText>}
          </FormGrid>
        </Grid>
      );
};

export default PersonalInformation;