import { type ParamListBase } from "@react-navigation/native";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type BottomTabScreenProps } from "@react-navigation/bottom-tabs";

//auth screen stack navigation
export interface AuthStackParamList extends ParamListBase {
  Onboarding: undefined;
  GetStarted: undefined;
  SignUp: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  VerificationCode: {
    email: string;
  };
  ChangePassword: undefined;
}

export type AuthScreenProps<ScreenName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, ScreenName>;

//bottom tab-bar screen navigation
export interface BottomTabBarStackParamList extends ParamListBase {
  HomeStack: undefined;
  LotteryStack: undefined;
  MessageStack: undefined;
  GiftStack: undefined;
  ProfileStack: undefined;
}

export type BottomTabBarScreenProps<
  ScreenName extends keyof BottomTabBarStackParamList
> = BottomTabScreenProps<BottomTabBarStackParamList, ScreenName>;

//native and app screen navigation
export interface RootStackParamList extends ParamListBase {
  Home: undefined;
  Lottery: undefined;
  Message: undefined;
  Gift: undefined;
  Profile: undefined;
}

export type RootStackScreenProps<ScreenName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, ScreenName>;
