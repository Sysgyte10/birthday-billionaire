import { authScreenTypes } from "@src/types/types";
import * as Screen from "@src/screens/auth";
import { authScreenNames } from "./navigation-names";

export const authScreen: authScreenTypes[] = [
  {
    screenName: authScreenNames.ONBOARDING,
    component: Screen.Onboarding,
  },
  {
    screenName: authScreenNames.LOGIN,
    component: Screen.Login,
  },
  {
    screenName: authScreenNames.FORGOT_PASSWORD,
    component: Screen.ForgotPassword,
  },
  {
    screenName: authScreenNames.CHANGE_PASSWORD,
    component: Screen.ChangePassword,
  },
  {
    screenName: authScreenNames.VERIFICATION_CODE,
    component: Screen.VerificationCode,
  },
  {
    screenName: authScreenNames.GET_STARTED,
    component: Screen.GetStarted,
  },
  {
    screenName: authScreenNames.SIGN_UP,
    component: Screen.SignUp,
  },
];
