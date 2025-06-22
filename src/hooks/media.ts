import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export const useMedia = () => {
  const [mediaLoading, setMediaLoading] = useState<boolean>(false);
  const openGallery = async () => {
    setMediaLoading(true);
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.1,
      });

      console.log(result);
      if (!result.canceled) {
        return result.assets[0];
      }
    } catch (err: any) {
      console.log("Error", err);
    } finally {
      setMediaLoading(false);
    }
  };

  const openCamera = async () => {
    setMediaLoading(true);
    try {
      // Request camera permissions
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Camera permission is required!");
        setMediaLoading(false);
        return;
      }

      // Launch the camera
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ["images"],
        aspect: [4, 3],
        quality: 0.1,
      });

      console.log(result);
      if (!result.canceled) {
        return result.assets[0];
      }
    } catch (err) {
      console.log("Error", err);
    } finally {
      setMediaLoading(false);
    }
  };

  return {
    openGallery,
    openCamera,
    mediaLoading,
  };
};
