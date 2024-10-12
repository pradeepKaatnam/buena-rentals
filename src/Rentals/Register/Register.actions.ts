import { IFinancialInformation, IFormField, IPersonalInformation } from "./Register.models";
import { IRegisterService } from "./Register.service";

export enum REGISTER_ACTIONS {
  UPDATE_PERSONAL_INFO_ENTRY = 'UPDATE_PERSONAL_INFO_ENTRY',
  UPDATE_FINANCIAL_INFO_ENTRY = 'UPDATE_FINANCIAL_INFO_ENTRY', 
  UPDATE_PERSONAL_INFO = 'UPDATE_PERSONAL_INFO',
  UPDATE_FINANCIAL_INFO = 'UPDATE_FINANCIAL_INFO',  
  UPDATE_API_FLOW = 'UPDATE_API_FLOW',
}

export type IRegisterDispatchActions = | {
    type: REGISTER_ACTIONS.UPDATE_PERSONAL_INFO_ENTRY;
    data: { key: string, value: IFormField };
  }
| {
    type: REGISTER_ACTIONS.UPDATE_FINANCIAL_INFO_ENTRY;
    data: { key: string, value: IFormField };
  }
| {
    type: REGISTER_ACTIONS.UPDATE_FINANCIAL_INFO;
    data: IFinancialInformation;
}
| {
    type: REGISTER_ACTIONS.UPDATE_PERSONAL_INFO;
    data: IPersonalInformation;
}
| {
    type: REGISTER_ACTIONS.UPDATE_API_FLOW;
    data: {loading?: boolean;
        errorMessage?: string;};
}

export interface IRegisterActions {
    updatePersonalInformationEntry:(key: string, value: IFormField) => void;
    updateFinancialInformationEntry:(key: string, value: IFormField) => void;
    updatePersonalInformation:(data: IPersonalInformation) => void;
    updateFinancialInformation:(data: IFinancialInformation) => void;
    updateAPIFlowState: (loading: boolean) => void;
    register: (personalInfo: IPersonalInformation, financialInformation: IFinancialInformation) => Promise<void>;
}

export class RegisterActions implements IRegisterActions {
    private readonly dispatch: React.Dispatch<IRegisterDispatchActions>;
    private readonly service: IRegisterService;

    constructor(dispatch: React.Dispatch<IRegisterDispatchActions>, service: IRegisterService) {
        this.dispatch = dispatch;
        this.service = service;
    }

    updateAPIFlowState(loading: boolean) {
        this.dispatch({
            type: REGISTER_ACTIONS.UPDATE_API_FLOW,
            data: {loading: loading},
        });
    };

    async register(personalInfo: IPersonalInformation, financialInformation: IFinancialInformation): Promise<void> {
        this.dispatch({
            type: REGISTER_ACTIONS.UPDATE_API_FLOW,
            data: { loading: true },
        });
        const data = await this.service.register(personalInfo, financialInformation);
        this.dispatch({
            type: REGISTER_ACTIONS.UPDATE_API_FLOW,
            data: { loading: false, errorMessage: data?.errors && data.errors.length > 0 ? data.errors[0] : '' },   
        });
    }

    updatePersonalInformationEntry(key: string, value: IFormField) {
        this.dispatch({
            type: REGISTER_ACTIONS.UPDATE_PERSONAL_INFO_ENTRY,
            data: {
                key: key,
                value: value,
            },
        });
    }

    updateFinancialInformationEntry(key: string, value: IFormField) {
        this.dispatch({
            type: REGISTER_ACTIONS.UPDATE_FINANCIAL_INFO_ENTRY,
            data: {
                key: key,
                value: value,
            },
        });
    }

    updatePersonalInformation(data: IPersonalInformation) {
        this.dispatch({
            type: REGISTER_ACTIONS.UPDATE_PERSONAL_INFO,
            data,
        });
    }

    updateFinancialInformation(data: IFinancialInformation) {
        this.dispatch({
            type: REGISTER_ACTIONS.UPDATE_FINANCIAL_INFO,
            data,
        });
    }
}
