import React from 'react';
import { render } from '@testing-library/react';
import Review from './Review';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IReviewProps } from './Register.models';

// Mock the useStyles module if necessary
jest.mock('./Register.styles', () => ({
  __esModule: true,
  default: () => ({
    root: 'root',
    // other mocked class names
  }),
}));

describe('Review Component', () => {
  const theme = createTheme();

  const mockProps: IReviewProps = {
    personalInformation: {
      firstName: { value: 'Pradeep', error: '' },
      lastName: { value: 'Kaatnam', error: '' },
      addressLine1: { value: '123 Main St', error: '' },
      addressLine2: { value: 'Apt 4B', error: '' },
      email: { value: 'pradeep.kaats@example.com', error: '' },
      nationality: { value: 'Indian', error: '' },
    },
    financialInformation: {
      employmentStatus: { value: '1', error: '' },
      occupation: { value: 'Software Engineer', error: '' },
      employer: { value: 'Microsoft', error: '' },
      workDuration: { value: '2 years', error: '' },
      salaryIndication: { value: '3.000 - 4.000', error: '' },
    },
  };

  it('matches the snapshot', () => {
    const { asFragment } = render(
        <Review {...mockProps} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});