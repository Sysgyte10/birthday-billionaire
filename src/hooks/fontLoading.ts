import { useState } from "react";
import * as Fonts from "expo-font";

export const useFontLoading = () => {
  const [isFontLoadingComplete, setIsFontLoadingComplete] =
    useState<boolean>(false);

  const loadResourcesAndDataAsync = async () => {
    setIsFontLoadingComplete(false);
    try {
      await Fonts.loadAsync({
        bold: require("../../assets/fonts/Outfit-Bold.ttf"),
        semi_bold: require("../../assets/fonts/Outfit-SemiBold.ttf"),
        light: require("../../assets/fonts/Outfit-Light.ttf"),
        medium: require("../../assets/fonts/Outfit-Medium.ttf"),
        regular: require("../../assets/fonts/Outfit-Regular.ttf"),
      });
    } catch (error) {
      console.warn(error);
      setIsFontLoadingComplete(false);
    } finally {
      setIsFontLoadingComplete(true);
    }
  };

  return {
    loadResourcesAndDataAsync,
    isFontLoadingComplete,
  };
};
