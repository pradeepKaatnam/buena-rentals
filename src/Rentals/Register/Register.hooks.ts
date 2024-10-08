import { useEffect, useReducer } from 'react';
import { IFinancialInformation, IPersonalInformation, IRegisterState } from './Register.models';
import { IRegisterActions, RegisterActions } from './Register.actions';
import { registerReducer } from './Register.reducer';
import { IRegisterService, RegisterService } from './Register.service';

export const useInit = (
): {
  state: IRegisterState;
  actions: IRegisterActions;
} => {
  const [state, dispatch] = useReducer(registerReducer, {
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
  } as IRegisterState);

  const service: IRegisterService = new RegisterService();
  const actions: IRegisterActions = new RegisterActions(dispatch, service);
  useEffect(() => {}, []);
  return { state, actions };
};
