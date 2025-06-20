import { colors } from "@src/resources/color/color";

export const useCustomButton = () => {
  const getButtonColor = (
    goldenRod?: boolean,
    black?: boolean,
    lightGrey?: boolean,
    darkGrey?: boolean,
    blue?: boolean,
    white?: boolean,
    danger?: boolean
  ) => {
    if (goldenRod) {
      return colors?.goldenRod;
    } else if (black) {
      return colors.black;
    } else if (lightGrey) {
      return colors.lightGrey;
    } else if (darkGrey) {
      return colors.darkGrey;
    } else if (blue) {
      return colors.blue;
    } else if (white) {
      return colors.white;
    } else if (danger) {
      return colors.danger;
    }
  };

  return {
    getButtonColor,
  };
};
