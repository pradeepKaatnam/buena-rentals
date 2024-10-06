import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';

const Review: React.FC = () => {
    return (
        <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Personal Information
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom sx={{ color: 'text.secondary' }}>
            Address
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2" gutterBottom>
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
                    Occupation:
                </Typography>
                <Typography variant="body2" style={{marginTop: '2px'}}>Student</Typography>
            </Stack>
            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{ width: '100%', mb: 1 }}
            >
                <Typography variant="body1" sx={{ color: 'text.secondary' }} >
                    Occupation:
                </Typography>
                <Typography variant="body2" style={{marginTop: '2px'}}>Student</Typography>
            </Stack>
          </Grid>
        </div>
      </Stack>
    );
};

export default Review;