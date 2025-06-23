import { authScreenNames } from "@src/navigation/navigation-names";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { Platform, StyleSheet, View } from "react-native";
import { CommonStatusBar, FormTitle, TextAction } from "@src/common";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { useStepper } from "@src/stepper/hooks/useStepper";
import { signUpSteps } from "@src/constants/signup-steps";
import { useForm } from "react-hook-form";
import { signUpFormStep1, signUpFormStep2 } from "@src/form/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  signUpFormStep1ValidationRule,
  signUpFormStep2ValidationRule,
} from "@src/form/validation-rule/rule";
import { CustomButton } from "@src/components/shared";
import { Step1 } from "@src/components/auth";
import { ScrollContainer } from "../ScrollContainer";
import { returnSignUpFormHeader } from "@src/helper/ui-utils";
import { Step2 } from "@src/components/auth/sign-up/step2";

export const SignUp = ({
  navigation,
}: AuthScreenProps<authScreenNames.SIGN_UP>) => {
  const { activeStepIndex, nextStep, btnStepperText } = useStepper(
    signUpSteps,
    "Continue",
    "Sign Up"
  );

  //form 1 validation control
  const {
    control: step1Control,
    formState: { errors: step1Errors },
    trigger: step1Trigger,
    setValue: setStep1Value,
    getValues: getStep1Value,
    clearErrors: clearStep1Errors,
  } = useForm<signUpFormStep1>({
    mode: "onChange",
    resolver: yupResolver(signUpFormStep1ValidationRule),
  });

  //form 2 validation control
  const {
    control: step2Control,
    formState: { errors: step2Errors },
    trigger: step2Trigger,
    setValue: setStep2Value,
    getValues: getStep2Value,
    clearErrors: clearStep2Errors,
  } = useForm<signUpFormStep2>({
    mode: "onChange",
    resolver: yupResolver(signUpFormStep2ValidationRule),
  });

  const onSubmit = async () => {
    let isValid = false;
    if (activeStepIndex === 0) {
      isValid = await step1Trigger();
      if (isValid) nextStep();
    } else if (activeStepIndex === 1) {
      isValid = await step2Trigger();
      if (isValid) {
        console.log("Operation successful");
      }
    }
  };

  const steps = [
    <Step1
      formProps={{
        control: step1Control,
        errors: step1Errors,
        setValues: setStep1Value,
        clearErrors: clearStep1Errors,
        getValues: getStep1Value,
      }}
    />,
    <Step2
      formProps={{
        control: step2Control,
        errors: step2Errors,
        setValues: setStep2Value,
        clearErrors: clearStep2Errors,
        getValue: getStep2Value,
      }}
    />,
  ];

  return (
    <>
      <CommonStatusBar style='dark' bgColor={colors.white} />
      <AppWrapper safeArea style={styles.screen} bgColor={colors.white}>
        <FormTitle
          title={returnSignUpFormHeader(activeStepIndex + 1)?.title}
          desc={returnSignUpFormHeader(activeStepIndex + 1)?.description}
        />
        <ScrollContainer>
          {steps[activeStepIndex]}
          <View
            style={{
              paddingVertical: Platform.OS === "ios" ? DVH(10) : DVH(25),
            }}
          />
        </ScrollContainer>
        <View style={styles.bottomActionContainer}>
          <CustomButton
            title={String(btnStepperText)}
            textType='semi-bold'
            textSize={15}
            goldenRod
            textWhite
            onPress={async () => await onSubmit()}
            buttonType='Solid'
            btnStyle={styles.btn}
          />
          <TextAction
            message='Already have an account,'
            actionLabel='Login'
            onPressAction={() => navigation.navigate(authScreenNames.LOGIN)}
          />
        </View>
      </AppWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: moderateScale(15),
    marginTop: moderateScale(-30),
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
  },
});
