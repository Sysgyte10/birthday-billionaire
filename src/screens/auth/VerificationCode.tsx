import { authScreenNames } from "@src/navigation/navigation-names";
import { AuthScreenProps } from "@src/router/types";
import React, { useEffect, useState } from "react";
import { AppWrapper } from "../AppWrapper";
import { FormTitle, OTPForm } from "@src/common";
import { StyleSheet } from "react-native";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { KeyboardDismissal } from "../KeyboardDismissal";

export const VerificationCode = ({
  navigation,
}: AuthScreenProps<authScreenNames.VERIFICATION_CODE>) => {
  const [otpValue, setOtpValue] = useState<string>("");
  useEffect(() => {
    console.log(otpValue);
  }, [otpValue]);
  return (
    <AppWrapper style={styles.screen} bgColor={colors.white} safeArea>
      <KeyboardDismissal>
        <FormTitle
          title='Verification Code'
          desc='Please enter the verification code sent to your email address'
        />

        <OTPForm
          numberOfInput={4}
          onComplete={(otp) => setOtpValue(otp)}
          onClick={() => {
            if (otpValue.length >= 4) {
              navigation.navigate(authScreenNames.CHANGE_PASSWORD);
            }
          }}
          inputStyle={styles.otpInput}
          containerStyle={styles.otpContainer}
          title='Enter OTP'
        />
      </KeyboardDismissal>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: moderateScale(15),
  },
  otpInput: {
    width: DVW(21),
    height: DVH(10.5),
    backgroundColor: colors.white,
    borderColor: "#D9D9D9",
    borderWidth: DVW(0.3),
    fontSize: moderateScale(22),
  },
  otpContainer: {
    marginTop: moderateScale(10),
  },
});
