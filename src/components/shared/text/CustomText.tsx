import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { useCustomText } from "../hooks";
import { moderateScale } from "@src/resources/responsiveness";

export type textType = "bold" | "semi-bold" | "light" | "medium" | "regular";

interface ICustomTextProps {
  children: React.ReactNode;
  size: number;
  type?: textType;
  goldenRod?: boolean;
  black?: boolean;
  lightGrey?: boolean;
  darkGrey?: boolean;
  blue?: boolean;
  white?: boolean;
  danger?: boolean;
  style?: StyleProp<TextStyle>;
}

export const CustomText: React.FC<ICustomTextProps> = ({
  children,
  size,
  type,
  goldenRod,
  black,
  lightGrey,
  darkGrey,
  blue,
  white,
  danger,
  style,
}) => {
  const { getFontFamily, getTextColor } = useCustomText();
  const fontFamily = getFontFamily(type ? type : "regular");
  const textColor = getTextColor(
    goldenRod,
    black,
    lightGrey,
    darkGrey,
    blue,
    white,
    danger
  );
  return (
    <Text
      style={[
        {
          fontFamily: fontFamily,
          fontSize: moderateScale(size),
          color: textColor,
        },
        style,
      ]}>
      {children && children}
    </Text>
  );
};
