import { FormTitle, Loader } from "@src/common";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@src/resources/color/color";
import { useMedia } from "@src/hooks";
import { imageFromMediaType } from "@src/types/types";
import { extractFileName } from "@src/helper/utils";
import { CustomInput } from "@src/components/shared";

interface IStep2Props {
  formProps: any;
}

export const Step2: React.FC<IStep2Props> = ({ formProps }) => {
  const { openGallery, mediaLoading } = useMedia();
  const [imgFromMedia, setImgFromMedia] = useState<imageFromMediaType>({
    uri: "",
    name: "",
    type: "",
  });
  const props = formProps;
  return (
    <View style={styles.formContainer}>
      <View style={styles.hrLine} />
      <FormTitle
        title='Profile Photo'
        desc='This image will be displayed on your profile'
        titleStyle={styles.title}
        descStyle={styles.description}
        containerStyle={styles.formTitleContainer}
      />
      <Controller
        control={props?.control}
        render={({ field }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
            }}>
            <View style={styles.roundContainer}>
              <Image
                source={
                  imgFromMedia.uri
                    ? { uri: imgFromMedia?.uri }
                    : require("@src/assets/png/no-img.png")
                }
                style={styles.img}
                contentFit='fill'
              />
            </View>
            <TouchableOpacity
              style={styles.editBtn}
              onPress={async () => {
                const result = await openGallery();
                const fileName = extractFileName(String(result?.uri));
                if (result) {
                  setImgFromMedia({
                    ...imgFromMedia,
                    uri: result?.uri,
                    name: fileName,
                    type: result?.mimeType,
                  });
                  field.onChange(fileName);
                }
              }}>
              {mediaLoading ? (
                <Loader size='small' color={colors.white} />
              ) : (
                <AntDesign
                  name='edit'
                  size={moderateScale(17)}
                  color={colors.white}
                />
              )}
            </TouchableOpacity>
          </View>
        )}
        name='profilePhoto'
        defaultValue=''
      />
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            title='Describe your friends in few words'
            titleType='medium'
            value={field.value}
            onChangeText={(valueEntered) => field.onChange(valueEntered)}
            type='custom'
            showErrorText
            error={props?.errors?.describeSelfInWords?.message}
            placeholder='Enter description'
            placeHolderTextColor={"#717171"}
            titleStyle={styles.inputTitle}
            multiLine
          />
        )}
        name='describeSelfInWords'
        defaultValue=''
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: moderateScale(20),
    marginTop: moderateScale(25),
  },
  hrLine: {
    borderBottomWidth: DVW(0.2),
    borderColor: "#7171713e",
    width: "100%",
    paddingVertical: moderateScale(15),
  },
  title: {
    fontSize: moderateScale(14),
  },
  description: {
    fontSize: moderateScale(10),
  },
  formTitleContainer: {
    paddingVertical: moderateScale(25),
  },
  roundContainer: {
    width: Platform.OS === "ios" ? DVW(22) : DVW(20),
    height: DVH(10),
    borderRadius: moderateScale(100),
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  editBtn: {
    backgroundColor: colors.goldenRod,
    padding: moderateScale(7),
    borderRadius: moderateScale(100),
    marginTop: moderateScale(-10),
    marginLeft: moderateScale(-25),
  },
  inputTitle: {
    fontSize: moderateScale(12),
  },
});
