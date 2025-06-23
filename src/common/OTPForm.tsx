import {
  CustomButton,
  CustomOTPInput,
  CustomText,
} from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface IOTPFormProps {
  onComplete: (otp: string) => void;
  numberOfInput?: number;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onClick: () => void;
  title?: string;
}

export const OTPForm: React.FC<IOTPFormProps> = ({
  onComplete,
  numberOfInput,
  inputStyle,
  containerStyle,
  onClick,
  title,
}) => {
  return (
    <View style={containerStyle}>
      {title && (
        <CustomText
          type='medium'
          size={14}
          black
          style={{
            marginBottom: moderateScale(5),
          }}>
          {title}
        </CustomText>
      )}
      <CustomOTPInput
        numberOfInput={numberOfInput}
        onComplete={(otp) => onComplete(otp)}
        inputStyle={inputStyle}
      />
      <CustomButton
        title={"Next"}
        textType='semi-bold'
        textSize={15}
        goldenRod
        textWhite
        onPress={() => onClick()}
        buttonType='Solid'
        btnStyle={styles.btn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: moderateScale(50),
    paddingVertical: moderateScale(13),
    marginTop: moderateScale(40),
    marginBottom: moderateScale(10),
  },
});
