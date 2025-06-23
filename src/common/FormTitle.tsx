import { CustomText } from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface IFormTitleProps {
  title?: string;
  desc?: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  descStyle?: StyleProp<TextStyle>;
}

export const FormTitle: React.FC<IFormTitleProps> = ({
  title,
  desc,
  containerStyle,
  titleStyle,
  descStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <CustomText type='semi-bold' size={20} black style={titleStyle}>
        {title}
      </CustomText>
      <CustomText type='regular' size={13} black style={descStyle}>
        {desc}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: moderateScale(5),
    paddingBottom: moderateScale(10),
  },
});
