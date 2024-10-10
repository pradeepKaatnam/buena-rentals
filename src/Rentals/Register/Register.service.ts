import { IResposeData } from "../../common/models/common.models";
import { IFinancialInformation, IPersonalInformation } from "./Register.models";

export interface IRegisterService {
    register(personalInfo: IPersonalInformation, financialInformation: IFinancialInformation): Promise<IResposeData<string>>;
}
  
export class RegisterService implements IRegisterService {
    
    register(personalInfo: IPersonalInformation, financialInformation: IFinancialInformation): Promise<IResposeData<string>> {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve('Registration successful');
            }, 2000); // Simulate a 1-second delay
        }).then((data: any) => {
            const responseData: IResposeData<string> = { response: data, errors: [] };
            return responseData;
        }).catch((error) => {
            const responseData: IResposeData<string> = { response: '', errors: [] };
            if(error?.response?.data?.errors) {
                responseData.errors = error.response.data.errors;
            } else {
                responseData.errors = ['An error occurred while registering'];
            }

            return responseData;
        });
    }
}