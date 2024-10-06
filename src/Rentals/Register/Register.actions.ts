import { IRegisterService } from "./Register.service";

export enum REGISTER_ACTIONS {
  ACTION_NAME = 'ACTION_NAME'
}

export type IRegisterDispatchActions = { type: REGISTER_ACTIONS.ACTION_NAME; data: any };

export interface IRegisterActions {
}

export class RegisterActions implements IRegisterActions {
  private readonly dispatch: React.Dispatch<IRegisterDispatchActions>;
  private readonly service: IRegisterService;
  constructor(dispatch: React.Dispatch<IRegisterDispatchActions>, service: IRegisterService) {
    this.dispatch = dispatch;
    this.service = service;
  }
}
