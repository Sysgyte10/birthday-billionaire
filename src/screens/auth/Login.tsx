import { authScreenNames } from "@src/navigation/navigation-names";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { Platform, StyleSheet, View } from "react-native";
import { moderateScale } from "@src/resources/responsiveness";
import { Controller, useForm } from "react-hook-form";
import { loginFormTypes } from "@src/form/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormValidationRule } from "@src/form/validation-rule/rule";
import { colors } from "@src/resources/color/color";
import { FormTitle, TextAction } from "@src/common";
import { CustomButton, CustomInput } from "@src/components/shared";
import { ScrollContainer } from "../ScrollContainer";
import { ModalMessageProvider } from "@src/helper/ui-utils";

export const Login = ({
  navigation,
}: AuthScreenProps<authScreenNames.LOGIN>) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<loginFormTypes>({
    mode: "onChange",
    resolver: yupResolver(loginFormValidationRule),
  });

  const onSubmit = (data: loginFormTypes) => {
    if (data) {
      ModalMessageProvider.showModalMsg({
        msgType: "SUCCESS",
        title: "Login Successful",
        description:
          "The user was logged in successfully. You can now proceed to home page",
      });
    }
  };
  return (
    <AppWrapper style={styles.screen} bgColor={colors.white} safeArea>
      <FormTitle title='Welcome Back!' desc="Let's get you logged in" />
      <ScrollContainer>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            render={({ field }) => (
              <CustomInput
                title='Username'
                titleType='medium'
                value={field.value}
                onChangeText={(valueEntered) => field.onChange(valueEntered)}
                keyboardType='default'
                type='custom'
                showErrorText
                error={errors?.userName?.message}
                placeholder='Enter you username'
                placeHolderTextColor={"#717171"}
                titleStyle={styles.inputTitle}
                style={styles.input}
              />
            )}
            name='userName'
            defaultValue=''
          />

          <Controller
            control={control}
            render={({ field }) => (
              <CustomInput
                title='Password'
                titleType='medium'
                value={field.value}
                onChangeText={(valueEntered) => field.onChange(valueEntered)}
                type='password'
                showErrorText
                error={errors?.password?.message}
                placeholder='Enter you password'
                placeHolderTextColor={"#717171"}
                titleStyle={styles.inputTitle}
                style={styles.input}
              />
            )}
            name='password'
            defaultValue=''
          />
        </View>
        <CustomButton
          title={"Login"}
          textType='semi-bold'
          textSize={15}
          goldenRod
          textWhite
          onPress={handleSubmit(onSubmit)}
          buttonType='Solid'
          btnStyle={styles.btn}
        />
        <TextAction
          actionLabel='I forgot my password'
          onPressAction={() =>
            navigation.navigate(authScreenNames.FORGOT_PASSWORD)
          }
          actionStyle={{
            color: "#407BFF",
          }}
        />
      </ScrollContainer>
      <View style={styles.bottomActionContainer}>
        <TextAction
          message="Don't have an account?"
          actionLabel='Sign up'
          onPressAction={() => navigation.navigate(authScreenNames.SIGN_UP)}
        />
      </View>
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
  bottomActionContainer: {
    position: "absolute",
    bottom: moderateScale(0),
    paddingBottom:
      Platform.OS === "ios" ? moderateScale(20) : moderateScale(35),
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    paddingTop: moderateScale(5),
  },
  btn: {
    borderRadius: moderateScale(50),
    paddingVertical: moderateScale(13),
    marginTop: moderateScale(40),
    marginBottom: moderateScale(10),
  },
});
