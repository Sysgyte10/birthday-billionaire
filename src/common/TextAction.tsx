import { CustomText } from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";

interface ITextActionProps {
  message?: string;
  actionLabel?: string;
  onPressAction: () => void;
  msgStyle?: StyleProp<TextStyle>;
  actionStyle?: StyleProp<TextStyle>;
}

export const TextAction: React.FC<ITextActionProps> = ({
  message,
  actionLabel,
  onPressAction,
  msgStyle,
  actionStyle,
}) => {
  return (
    <View style={styles.actionBtnContainer}>
      {message && (
        <CustomText type='regular' size={14} black style={msgStyle}>
          {message}
        </CustomText>
      )}
      {actionLabel && (
        <TouchableOpacity onPress={() => onPressAction()}>
          <CustomText type='semi-bold' size={14} goldenRod style={actionStyle}>
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
