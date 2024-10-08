import { IFinancialInformation, IPersonalInformation } from "../../Rentals/Register/Register.models";

export const validatePersonalInformation = (personalInformation: IPersonalInformation): boolean => {
    let isValid = true;

    if(personalInformation.firstName.value === '') {
        personalInformation.firstName.error = 'This field is required';
        isValid = false;
    } else {
        personalInformation.firstName.error = '';
    }

    if(personalInformation.lastName.value === '') {
        personalInformation.lastName.error = 'This field is required';
        isValid = false;
    } else {
        personalInformation.lastName.error = '';
    }

    if(personalInformation.addressLine1.value === '') {
        personalInformation.addressLine1.error = 'This field is required';
        isValid = false;
    } else {
        personalInformation.addressLine1.error = '';
    }  

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(personalInformation.email.value === '') {
        personalInformation.email.error = 'This field is required';
        isValid = false;
    } else if (!emailRegex.test(personalInformation.email.value)) {
        personalInformation.email.error = 'Invalid email address';
        isValid = false;
    } else {
        personalInformation.email.error = '';
    }

    if(personalInformation.nationality.value === '') {
        personalInformation.nationality.error = 'This field is required';
        isValid = false;
    } else {
        personalInformation.nationality.error = '';
    }

    return isValid;
}

export const validateFinancialInformation = (financialInformation: IFinancialInformation): boolean => {
    let isValid = true;

    if(financialInformation.employer.value === '') {
        financialInformation.employer.error = 'This field is required';
        isValid = false;
    } else {
        financialInformation.employer.error = '';
    }

    if(financialInformation.employmentStatus.value === '') {
        financialInformation.employmentStatus.error = 'This field is required';
        isValid = false;
    } else {
        financialInformation.employmentStatus.error = '';
    }

    if(financialInformation.occupation.value === '') {
        financialInformation.occupation.error = 'This field is required';
        isValid = false;
    } else {
        financialInformation.occupation.error = '';
    }

    if(financialInformation.workDuration.value === '') {
        financialInformation.workDuration.error = 'This field is required';
        isValid = false;
    } else {
        financialInformation.workDuration.error = '';
    }

    if(financialInformation.salaryIndication.value === '') {
        financialInformation.salaryIndication.error = 'This field is required';
        isValid = false;
    } else {
        financialInformation.salaryIndication.error = '';
    }

    return isValid;
}


