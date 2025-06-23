import { authScreenNames } from "@src/navigation/navigation-names";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { StyleSheet, View } from "react-native";
import { FormTitle } from "@src/common";
import { moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { KeyboardDismissal } from "../KeyboardDismissal";
import { Controller, useForm } from "react-hook-form";
import { changePasswordFormTypes } from "@src/form/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordFormValidationRule } from "@src/form/validation-rule/rule";
import { ModalMessageProvider } from "@src/helper/ui-utils";
import { CustomButton, CustomInput } from "@src/components/shared";

export const ChangePassword =
  ({}: AuthScreenProps<authScreenNames.CHANGE_PASSWORD>) => {
    const {
      handleSubmit,
      control,
      formState: { errors },
    } = useForm<changePasswordFormTypes>({
      mode: "onChange",
      resolver: yupResolver(changePasswordFormValidationRule),
    });

    const onSubmit = (data: changePasswordFormTypes) => {
      if (data) {
        ModalMessageProvider.showModalMsg({
          msgType: "SUCCESS",
          title: "Password Reset Successfully",
          description:
            "Please return to the login page to sign in with your new password",
          btnTitle: "Continue",
          onBtnClick: () => console.log("Hello from modal message"),
        });
      }
    };

    return (
      <AppWrapper safeArea style={styles.screen} bgColor={colors.white}>
        <KeyboardDismissal>
          <FormTitle
            title='Forgot Password'
            desc='Please enter a new password to continue'
          />
          <View style={styles.formContainer}>
            <Controller
              control={control}
              render={({ field }) => (
                <CustomInput
                  title='Old Password'
                  titleType='medium'
                  value={field.value}
                  onChangeText={(valueEntered) => field.onChange(valueEntered)}
                  type='password'
                  showErrorText
                  error={errors?.oldPassword?.message}
                  placeholder='Enter your old password'
                  placeHolderTextColor={"#717171"}
                  titleStyle={styles.inputTitle}
                  style={styles.input}
                />
              )}
              name='oldPassword'
              defaultValue=''
            />
            <Controller
              control={control}
              render={({ field }) => (
                <CustomInput
                  title='New Password'
                  titleType='medium'
                  value={field.value}
                  onChangeText={(valueEntered) => field.onChange(valueEntered)}
                  type='password'
                  showErrorText
                  error={errors?.newPassword?.message}
                  placeholder='Enter your new password'
                  placeHolderTextColor={"#717171"}
                  titleStyle={styles.inputTitle}
                  style={styles.input}
                />
              )}
              name='newPassword'
              defaultValue=''
            />
            <CustomButton
              title={"Reset"}
              textType='semi-bold'
              textSize={15}
              goldenRod
              textWhite
              onPress={handleSubmit(onSubmit)}
              buttonType='Solid'
              btnStyle={styles.btn}
            />
          </View>
        </KeyboardDismissal>
      </AppWrapper>
    );
  };

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: moderateScale(15),
  },
  inputTitle: {
    fontSize: moderateScale(12),
  },
  input: {
    backgroundColor: "#F5F5F5",
  },
  formContainer: {
    gap: moderateScale(20),
    marginTop: moderateScale(25),
  },
  btn: {
    borderRadius: moderateScale(50),
    paddingVertical: moderateScale(13),
    marginTop: moderateScale(20),
    marginBottom: moderateScale(10),
  },
});
