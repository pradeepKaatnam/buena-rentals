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
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2?: string;
    email: string;
    nationality: string;
}

export interface IFinancialInformation {
    employmentStatus: string;
    employer: string;
    occupation: string;
    workDuration: string;
    salaryIndication: number;
}

export interface IRegisterState {
    personalInformation: IPersonalInformation;
    financialInformation: IFinancialInformation;
    isSubmitting: boolean;
    isSubmitted: boolean;
    errorMessage: string;
}
