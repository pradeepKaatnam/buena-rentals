import React from 'react';
import { render } from '@testing-library/react';
import Register from './Register';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IFinancialInformation, IPersonalInformation } from './Register.models';

// Mock the actions module
jest.mock('./Register.hooks', () => ({
    useInit: () => ({
        state: {
            financialInformation: {
                employer: { value: '', error: '' },
                employmentStatus: { value: '', error: '' },
                occupation: { value: '', error: '' },
                salaryIndication: { value: '', error: '' },
                workDuration: { value: '', error: '' },
              } as IFinancialInformation,
              personalInformation: {
                addressLine1: { value: '', error: '' },
                addressLine2: { value: '', error: '' },
                email: { value: '', error: '' },
                firstName: { value: '', error: '' },
                lastName: { value: '', error: '' },
                nationality: { value: '', error: '' },
              } as IPersonalInformation,
            loading: false,
        },
        actions: {
            updatePersonalInformation: jest.fn(),
            updateFinancialInformation: jest.fn(),
            updatePersonalInformationEntry: jest.fn(),
            updateFinancialInformationEntry: jest.fn(),
            register: jest.fn(),
        },
    }),
}));

// Mock the RegisterStyles module
jest.mock('./Register.styles', () => ({
    __esModule: true,
    default: () => ({
      root: 'root',
      // other mocked class names
    }),
    RegisterStyles: {
        loader: {},
        gridLeftContainer: {},
        rightGridContainer: {},
        rightGridBox: {},
        stepperBox: {},
        stepperBoxMobile: {},
        steps: {},
        buttonsBox: {},
    },
}));

describe('Register Component', () => {
    it('matches the snapshot', () => {
        const { asFragment } = render(
            <Register />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});