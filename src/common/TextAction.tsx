import { CustomText } from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface ITextActionProps {
  message: string;
  actionLabel: string;
  onPressAction: () => void;
}

export const TextAction: React.FC<ITextActionProps> = ({
  message,
  actionLabel,
  onPressAction,
}) => {
  return (
    <View style={styles.actionBtnContainer}>
      {message && (
        <CustomText type='regular' size={13} black>
          {message}
        </CustomText>
      )}
      {actionLabel && (
        <TouchableOpacity onPress={() => onPressAction()}>
          <CustomText type='semi-bold' size={13} goldenRod>
            {actionLabel}
          </CustomText>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  actionBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(2),
    paddingVertical: moderateScale(20),
  },
});
