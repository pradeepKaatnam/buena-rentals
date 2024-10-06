import React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import useStyles from '../Register.styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
  }));

const LivingPreferences: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="employment-status" className={classes.formLabel} required>
              Employment Status
            </FormLabel>
            <Select
                labelId="employment-status"
                id="employment"
                value={1}
                label="Age"
                //onChange={handleChange}
                fullWidth
                style={{ height: '42px' }}
            >
                <MenuItem value={1}>Employed</MenuItem>
                <MenuItem value={2}>Self-employed</MenuItem>
                <MenuItem value={3}>Student</MenuItem>
                <MenuItem value={4}>Other</MenuItem>
            </Select>
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="cccupation" className={classes.formLabel} required>
                Occupation
            </FormLabel>
            <OutlinedInput
              id="cccupation-id"
              name="cccupation"
              type="cccupation"
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="employer-name" className={classes.formLabel} required>
                Employer Name
            </FormLabel>
            <OutlinedInput
              id="employer-name"
              name="employer-name"
              type="employer-name"
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="work-duration" className={classes.formLabel} required>
                    Work Duration
                </FormLabel>
                <OutlinedInput
                id="work-duration-id"
                name="work-duration"
                type="work-duration"
                required
                size="small"
                />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel component="legend" className={classes.formLabel} required>
                Salary Indication
                </FormLabel>
                <RadioGroup aria-label="salary" name="salary">
                <FormControlLabel value="0-1000" control={<Radio />} label="0 - 1.000" />
                <FormControlLabel value="1000-2000" control={<Radio />} label="1.000 - 2.000" />
                <FormControlLabel value="2000-3000" control={<Radio />} label="2.000 - 3.000" />
                <FormControlLabel value="3000-4000" control={<Radio />} label="3.000 - 4.000" />
                <FormControlLabel value="4000+" control={<Radio />} label="Mehr als 4.000" />
                </RadioGroup>
            </FormGrid>
            
        </Grid>
    );
};

export default LivingPreferences;