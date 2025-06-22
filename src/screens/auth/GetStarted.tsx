import { authScreenNames } from "@src/navigation/navigation-names";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { CommonStatusBar, FormTitle } from "@src/common";
import { StyleSheet, View } from "react-native";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { CustomButton } from "@src/components/shared";
import { ScrollContainer } from "../ScrollContainer";
import { getStarted } from "@src/constants/get-started";
import { Image } from "expo-image";

export const GetStarted =
  ({}: AuthScreenProps<authScreenNames.GET_STARTED>) => {
    return (
      <>
        <CommonStatusBar style='light' bgColor={colors.goldenRod} />
        <AppWrapper safeArea style={styles.screen} bgColor={colors.white}>
          <FormTitle
            title="See what you're going to enjoy"
            desc='You get to see snippet of different gifts you can send to your friends'
            descStyle={styles.desc}
          />
          <ScrollContainer>
            <View style={styles.scrollContainer}>
              {getStarted &&
                getStarted.map((item, index) => (
                  <View style={styles.imgCardContainer} key={index}>
                    <Image
                      style={styles.img}
                      source={item}
                      contentFit='cover'
                    />
                  </View>
                ))}
            </View>
            <View
              style={{
                paddingVertical: DVH(10),
              }}
            />
          </ScrollContainer>
          <View style={styles.btnContainer}>
            <CustomButton
              title='Get Started'
              buttonType='Solid'
              goldenRod
              textWhite
              onPress={() => {}}
              textType='semi-bold'
              btnStyle={styles.getStartedBtn}
            />
          </View>
        </AppWrapper>
      </>
    );
  };

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(-20),
  },
  desc: {
    maxWidth: DVW(93),
  },
  btnContainer: {
    position: "absolute",
    bottom: moderateScale(0),
    paddingBottom: moderateScale(35),
    paddingVertical: moderateScale(5),
    width: "100%",
    alignSelf: "center",
    backgroundColor: colors.white,
  },
  getStartedBtn: {
    width: "100%",
    borderRadius: moderateScale(50),
    paddingVertical: moderateScale(13),
  },
  imgCardContainer: {
    width: "48%",
    height: DVH(25),
    overflow: "hidden",
    borderRadius: moderateScale(7),
  },
  img: {
    width: "100%",
    height: "100%",
  },
  scrollContainer: {
    paddingTop: moderateScale(20),
    flexDirection: "row",
    flexWrap: "wrap",
    gap: moderateScale(10),
    justifyContent: "center",
  },
});
