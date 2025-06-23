export type signUpFormStep1 = {
  fullName: string;
  emailAddress: string;
  userName: string;
  dob: string;
  password: string;
};

export type signUpFormStep2 = {
  profilePhoto: string;
  describeSelfInWords: string;
};

export type loginFormTypes = {
  userName: string;
  password: string;
};

export type forgotPassFormTypes = {
  email: string;
};
