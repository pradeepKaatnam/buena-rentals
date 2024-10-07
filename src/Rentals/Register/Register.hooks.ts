import { useEffect, useReducer } from 'react';
import { IRegisterState } from './Register.models';
import { IRegisterActions, RegisterActions } from './Register.actions';
import { registerReducer } from './Register.reducer';
import { IRegisterService, RegisterService } from './Register.service';

export const useInit = (
): {
  state: IRegisterState;
  actions: IRegisterActions;
} => {
  const [state, dispatch] = useReducer(registerReducer, {
    financialInformation: {},
    personalInformation: {},
  } as IRegisterState);
  
  const service: IRegisterService = new RegisterService();
  const actions: IRegisterActions = new RegisterActions(dispatch, service);
  useEffect(() => {}, []);
  return { state, actions };
};
