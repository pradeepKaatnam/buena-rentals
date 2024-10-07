import { IFinancialInformation, IPersonalInformation } from "./Register.models";
import { IRegisterService } from "./Register.service";

export enum REGISTER_ACTIONS {
  UPDATE_PERSONAL_INFO = 'UPDATE_PERSONAL_INFO',
  UPDATE_FINANCIAL_INFO = 'UPDATE_FINANCIAL_INFO',  
}

export type IRegisterDispatchActions = | {
    type: REGISTER_ACTIONS.UPDATE_PERSONAL_INFO;
    data: { [key: string]: string };
  }
| {
    type: REGISTER_ACTIONS.UPDATE_FINANCIAL_INFO;
    data: { [key: string]: string };
  }

export interface IRegisterActions {
    updatePersonalInformation:(key: string, value: string) => void;
    updateFinancialInformation:(key: string, value: string) => void;
}

export class RegisterActions implements IRegisterActions {
    private readonly dispatch: React.Dispatch<IRegisterDispatchActions>;
    private readonly service: IRegisterService;

    constructor(dispatch: React.Dispatch<IRegisterDispatchActions>, service: IRegisterService) {
        this.dispatch = dispatch;
        this.service = service;
    }

    updatePersonalInformation(key: string, value: string) {
        this.dispatch({
            type: REGISTER_ACTIONS.UPDATE_PERSONAL_INFO,
            data: {
                [key]: value,
            },
        });
    }

    updateFinancialInformation(key: string, value: string) {
        this.dispatch({
            type: REGISTER_ACTIONS.UPDATE_FINANCIAL_INFO,
            data: {
                [key]: value,
            },
        });
    }
}
