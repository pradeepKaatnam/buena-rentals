import React from 'react';
import { Typography, Box } from '@mui/material';

const RentalsInfo: React.FC = () => {
    return (
        // <div className="bg-white text-black p-4">
        //     <h1 className="text-2xl font-bold">Information</h1>
        //     <p className="text-lg">
        //         This is some information content. Make sure the text color contrasts with the background color.
        //     </p>
        // </div>
        <Box p={2} className="bg-white text-black p-4" sx={{ textAlign: 'left' }}>
        <Typography variant="h2" gutterBottom>
            Buena 
        </Typography>
        <Typography variant="body1" align="justify">
          Our program, Buena Rentals, is dedicated to providing the best rental services in the industry. 
          We offer a wide range of rental properties to suit all needs and budgets. Our team is committed 
          to ensuring that our clients have a seamless and enjoyable rental experience.
        </Typography>
      </Box>
    );
};

export default RentalsInfo;