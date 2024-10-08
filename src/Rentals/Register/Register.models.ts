export interface IRegisterProps {

}

export interface IPersonalInformationProps {
    formData: IPersonalInformation;
    onFormChange: (formType: string, key: string, value: string) => void;
}

export interface IFinancialInformationProps {
    formData: IFinancialInformation;
    onFormChange: (formType: string, key: string, value: string) => void;
}   

export interface IReviewProps {
    personalInformation: IPersonalInformation;
    financialInformation: IFinancialInformation;
}

export interface IPersonalInformation {
    [key: string]: IFormField;
    firstName: IFormField;
    lastName: IFormField;
    addressLine1: IFormField;
    addressLine2: IFormField;
    email: IFormField;
    nationality: IFormField;
}

export interface IFormField {
    value: string;
    error: string;
}

export interface IFinancialInformation {
    [key: string]: IFormField;
    employmentStatus: IFormField;
    employer: IFormField;
    occupation: IFormField;
    workDuration: IFormField;
    salaryIndication: IFormField;
}

export interface IRegisterState {
    personalInformation: IPersonalInformation;
    financialInformation: IFinancialInformation;
    isSubmitting: boolean;
    isSubmitted: boolean;
    errorMessage: string;
}
