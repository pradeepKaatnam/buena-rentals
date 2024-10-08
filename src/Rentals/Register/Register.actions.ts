import { IFinancialInformation, IFormField, IPersonalInformation } from "./Register.models";
import { IRegisterService } from "./Register.service";

export enum REGISTER_ACTIONS {
  UPDATE_PERSONAL_INFO_ENTRY = 'UPDATE_PERSONAL_INFO_ENTRY',
  UPDATE_FINANCIAL_INFO_ENTRY = 'UPDATE_FINANCIAL_INFO_ENTRY', 
  UPDATE_PERSONAL_INFO = 'UPDATE_PERSONAL_INFO',
  UPDATE_FINANCIAL_INFO = 'UPDATE_FINANCIAL_INFO',  
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

export interface IRegisterActions {
    updatePersonalInformationEntry:(key: string, value: IFormField) => void;
    updateFinancialInformationEntry:(key: string, value: IFormField) => void;
    updatePersonalInformation:(data: IPersonalInformation) => void;
    updateFinancialInformation:(data: IFinancialInformation) => void;
}

export class RegisterActions implements IRegisterActions {
    private readonly dispatch: React.Dispatch<IRegisterDispatchActions>;
    private readonly service: IRegisterService;

    constructor(dispatch: React.Dispatch<IRegisterDispatchActions>, service: IRegisterService) {
        this.dispatch = dispatch;
        this.service = service;
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
