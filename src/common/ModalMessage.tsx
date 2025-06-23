import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Modal, View, StyleSheet, Platform, Pressable } from "react-native";
import { Image } from "expo-image";
import { CustomButton, CustomText } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";

export interface IModalMessageProps {
  msgType: "SUCCESS" | "ERROR" | "FAILED" | "WARNING";
  title: string;
  description: string;
  btnTitle?: string;
  onBtnClick?: () => void;
}

export interface IGlobalModalMessageRef {
  show: (config: IModalMessageProps) => void;
}

export const ModalMessage = forwardRef<IGlobalModalMessageRef>((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState<IModalMessageProps>({
    msgType: "SUCCESS",
    title: "",
    description: "",
    btnTitle: "",
  });

  useImperativeHandle(ref, () => ({
    show: (config) => {
      setModalData(config);
      setVisible(true);
    },
  }));

  return (
    <View>
      <Modal visible={visible} transparent animationType='slide'>
        <View style={styles.container}>
          <Pressable
            style={{
              width: "100%",
              height: "60%",
            }}
            onPress={() => {
              setVisible(false);
            }}
          />
          <View style={styles.content}>
            <Image
              source={
                modalData.msgType === "ERROR"
                  ? require("@src/assets/png/danger.png")
                  : modalData?.msgType === "FAILED"
                  ? require("@src/assets/png/warning.png")
                  : modalData?.msgType === "SUCCESS"
                  ? require("@src/assets/png/success.png")
                  : modalData?.msgType === "WARNING"
                  ? require("@src/assets/png/warning.png")
                  : undefined
              }
              style={styles.icon}
            />
            <CustomText
              size={16}
              type='semi-bold'
              black
              style={{
                textAlign: "center",
              }}>
              {modalData.title}
            </CustomText>
            <CustomText
              size={14}
              type='regular'
              black
              style={{
                textAlign: "center",
              }}>
              {modalData.description}
            </CustomText>
            <CustomButton
              title={modalData?.btnTitle ? modalData?.btnTitle : "Ok"}
              onPress={() => {
                modalData?.onBtnClick?.();
                setVisible(false);
              }}
              buttonType='Solid'
              textType='medium'
              textWhite
              btnStyle={[
                styles.button,
                {
                  backgroundColor:
                    modalData?.msgType === "SUCCESS"
                      ? "#0C8242"
                      : modalData?.msgType === "ERROR"
                      ? colors.danger
                      : modalData?.msgType === "FAILED"
                      ? "#CDDC27"
                      : modalData?.msgType === "WARNING"
                      ? colors.goldenRod
                      : undefined,
                },
              ]}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom:
      Platform.OS === "ios" ? moderateScale(25) : moderateScale(35),
  },
  content: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: moderateScale(10),
    padding: moderateScale(20),
  },
  icon: {
    width: DVW(20),
    height: DVH(10),
    alignSelf: "center",
    marginBottom: moderateScale(15),
  },
  button: {
    backgroundColor: "#0C8242",
    borderRadius: moderateScale(50),
    marginTop: moderateScale(15),
  },
});
