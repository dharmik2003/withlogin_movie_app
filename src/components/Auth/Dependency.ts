import { PhoneNumber } from "react-phone-number-input";

export interface LoginState {
    phoneNumber: string,
    password: string,
    loginState:boolean,
}
export interface SignUpState {
    name:string
    phoneNumber: string,
    email:string,
    password: string,
    SignupState: boolean,
}


/*login or not data pass in home page*/
export interface NavbarProps {
  loginstate: boolean;
  signupstate: boolean;
}
