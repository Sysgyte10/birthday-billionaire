import * as yup from "yup";

export const signUpFormStep1ValidationRule = yup.object().shape({
  fullName: yup.string().required("first name is required"),
  emailAddress: yup
    .string()
    .email("invalid email address")
    .required("email is required"),
  userName: yup.string().required("username is required"),
  dob: yup
    .string()
    .required("Date of birth is required")
    .test("valid-date", "Invalid date format", (value) => {
      return !isNaN(Date.parse(value));
    })
    .test("not-in-future", "Date of birth cannot be in the future", (value) => {
      const inputDate = new Date(value);
      const today = new Date();
      return inputDate <= today;
    }),
  password: yup.string().required("password is required"),
});

export const signUpFormStep2ValidationRule = yup.object().shape({
  profilePhoto: yup.string().required("profile photo not selected"),
  describeSelfInWords: yup.string().required("this field is required"),
});

export const loginFormValidationRule = yup.object().shape({
  userName: yup.string().required("username is required"),
  password: yup.string().required("password is required"),
});

export const forgotPassFormValidationRule = yup.object().shape({
  email: yup
    .string()
    .email("invalid email address")
    .required("email is required"),
});

export const changePasswordFormValidationRule = yup.object().shape({
  oldPassword: yup.string().required("old password is required"),
  newPassword: yup
    .string()
    .oneOf(
      [yup.ref("oldPassword"), undefined],
      "old password & new password must match"
    )
    .required("new password is required"),
});
