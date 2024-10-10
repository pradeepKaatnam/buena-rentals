import { IRegisterDispatchActions, REGISTER_ACTIONS } from "./Register.actions";
import { IRegisterState } from "./Register.models";

export const registerReducer = (state: IRegisterState, action: IRegisterDispatchActions): IRegisterState => {
    switch (action.type) {
        case REGISTER_ACTIONS.UPDATE_PERSONAL_INFO_ENTRY: {
          return {
            ...state,
            personalInformation: {
              ...state.personalInformation,
              [action.data.key]: action.data.value
            },
          };
        }
        case REGISTER_ACTIONS.UPDATE_FINANCIAL_INFO_ENTRY: {
          return {
            ...state,
            financialInformation: {
              ...state.financialInformation,
              [action.data.key]: action.data.value,
            },
          };
        }
        case REGISTER_ACTIONS.UPDATE_FINANCIAL_INFO: {
            return { ...state,  financialInformation: action.data };
        }
        case REGISTER_ACTIONS.UPDATE_PERSONAL_INFO: {
            return { ...state,  personalInformation: action.data };
        }
        case REGISTER_ACTIONS.UPDATE_API_FLOW: {
            return { ...state, ...action.data };
        }
        default: {
          throw new Error(`Unhandled action type`);
        }
      }
};
  