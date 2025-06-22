import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";

type LineStepperProps = {
  bgColor: string;
  submitted: boolean;
  lastLengthOfData: number;
  item: string;
  index: number;
  textColor: string;
  lineWidth: number;
  lineHeight: number;
};

export const LineStepper: React.FC<LineStepperProps> = ({
  bgColor,
  submitted,
  lastLengthOfData,
  index,
  lineWidth,
  lineHeight,
}) => {
  return (
    <View
      style={{
        backgroundColor: bgColor,
        width: DVW(lineWidth || 10),
        height: DVH(lineHeight || 0.7),
        marginRight: moderateScale(10),
        borderRadius: moderateScale(5),
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
