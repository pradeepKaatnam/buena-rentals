import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import useStyles from '../Register.styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup } from '@mui/material';
import { IFinancialInformationProps } from '../Register.models';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
  }));

const FinancialInformation: React.FC<IFinancialInformationProps> = (props: IFinancialInformationProps) => {
    const classes = useStyles();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      props.onFormChange && props.onFormChange('financial', event.target.name, event.target.value);
    }

    const handleSelectChange = (event: SelectChangeEvent<number>) => {
      props.onFormChange && props.onFormChange('financial', 'employmentStatus', event.target.value as string);
    };

    return (
        <Grid container spacing={3}>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="employment-status" className={classes.formLabel} required>
              Employment Status
            </FormLabel>
            <Select
                labelId="employment-status"
                id="employment"
                value={Number(props.formData.employmentStatus.value)}
                label="Age"
                onChange={handleSelectChange}
                fullWidth
                style={{ height: '42px' }}
            >
                <MenuItem value={1}>Employed</MenuItem>
                <MenuItem value={2}>Self-employed</MenuItem>
                <MenuItem value={3}>Student</MenuItem>
                <MenuItem value={4}>Other</MenuItem>
            </Select>
            {props.formData.employmentStatus.error && <FormHelperText sx={{ color: 'red' }}>{props.formData.employmentStatus.error}</FormHelperText>}
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="occupation" className={classes.formLabel} required>
                Occupation
            </FormLabel>
            <OutlinedInput
              id="occupation-id"
              name="occupation"
              type="occupation"
              required
              size="small"
              value={props.formData.occupation.value}
              onChange={onChange}
            />
            {props.formData.occupation.error && <FormHelperText sx={{ color: 'red' }}>{props.formData.occupation.error}</FormHelperText>}
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="employer-name" className={classes.formLabel} required>
                Employer Name
            </FormLabel>
            <OutlinedInput
              id="employer-name"
              name="employer"
              type="employer-name"
              required
              size="small"
              value={props.formData.employer.value}
              onChange={onChange}
            />
            {props.formData.employer.error && <FormHelperText sx={{ color: 'red' }}>{props.formData.employer.error}</FormHelperText>}
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="work-duration" className={classes.formLabel} required>
                    Work Duration
                </FormLabel>
                <OutlinedInput
                id="work-duration-id"
                name="workDuration"
                type="work-duration"
                required
                size="small"
                value={props.formData.workDuration.value}
                onChange={onChange}
                />
                {props.formData.workDuration.error && <FormHelperText sx={{ color: 'red' }}>{props.formData.workDuration.error}</FormHelperText>}
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel component="legend" className={classes.formLabel} required>
              Salary Indication {props.formData.salaryIndication.value}
            </FormLabel>
            <RadioGroup
              aria-label="salary"
              name="salaryIndication"
              value={props.formData.salaryIndication.value || ''}
              onChange={onChange}
            >
              <FormControlLabel value="0 - 1.000" control={<Radio />} label="0 - 1.000" />
              <FormControlLabel value="1.000 - 2.000" control={<Radio />} label="1.000 - 2.000" />
              <FormControlLabel value="2.000 - 3.000" control={<Radio />} label="2.000 - 3.000" />
              <FormControlLabel value="3.000 - 4.000" control={<Radio />} label="3.000 - 4.000" />
              <FormControlLabel value="Mehr als 4.000" control={<Radio />} label="Mehr als 4.000" />
            </RadioGroup>
            {props.formData.salaryIndication.error && (
              <FormHelperText sx={{ color: 'red' }}>
                {props.formData.salaryIndication.error}
              </FormHelperText>
            )}
          </FormGrid>
        </Grid>
    );
};

export default FinancialInformation;