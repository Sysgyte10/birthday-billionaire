import { authScreenNames } from "@src/navigation/navigation-names";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { StyleSheet, View } from "react-native";
import { moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { FormTitle } from "@src/common";
import { Controller, useForm } from "react-hook-form";
import { forgotPassFormTypes } from "@src/form/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPassFormValidationRule } from "@src/form/validation-rule/rule";
import { CustomButton, CustomInput } from "@src/components/shared";
import { KeyboardDismissal } from "../KeyboardDismissal";

export const ForgotPassword = ({
  navigation,
}: AuthScreenProps<authScreenNames.FORGOT_PASSWORD>) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<forgotPassFormTypes>({
    mode: "onChange",
    resolver: yupResolver(forgotPassFormValidationRule),
  });

  const onSubmit = (data: forgotPassFormTypes) => {
    if (data) {
      navigation.navigate(authScreenNames.VERIFICATION_CODE, {
        email: data?.email,
      });
    }
  };
  return (
    <AppWrapper style={styles.screen} bgColor={colors.white} safeArea>
      <FormTitle
        title='Forgot Password'
        desc='Please enter the email address used to register this account'
      />
      <KeyboardDismissal>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            render={({ field }) => (
              <CustomInput
                title='Email Address'
                titleType='medium'
                value={field.value}
                onChangeText={(valueEntered) => field.onChange(valueEntered)}
                keyboardType='default'
                type='custom'
                showErrorText
                error={errors?.email?.message}
                placeholder='Enter your email address'
                placeHolderTextColor={"#717171"}
                titleStyle={styles.inputTitle}
                style={styles.input}
              />
            )}
            name='email'
            defaultValue=''
          />
        </View>
        <CustomButton
          title={"Next"}
          textType='semi-bold'
          textSize={15}
          goldenRod
          textWhite
          onPress={handleSubmit(onSubmit)}
          buttonType='Solid'
          btnStyle={styles.btn}
        />
      </KeyboardDismissal>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: moderateScale(15),
  },
  formContainer: {
    gap: moderateScale(20),
    marginTop: moderateScale(25),
  },
  inputTitle: {
    fontSize: moderateScale(12),
  },
  input: {
    backgroundColor: "#F5F5F5",
  },
  btn: {
    borderRadius: moderateScale(50),
    paddingVertical: moderateScale(13),
    marginTop: moderateScale(40),
    marginBottom: moderateScale(10),
  },
});
