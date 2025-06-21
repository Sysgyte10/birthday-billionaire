import { authScreenNames } from "@src/navigation/navigation-names";
import { AuthScreenProps } from "@src/router/types";
import React, { useState } from "react";
import { AppWrapper } from "../AppWrapper";
import { CustomText } from "@src/components/shared";
import ReanimatedCarousel from "react-native-reanimated-carousel";
import { onboardingData } from "@src/constants/onboarding";
import {
  DVH,
  DVW,
  moderateScale,
  screenWidth,
} from "@src/resources/responsiveness";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "@src/resources/color/color";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";

export const Onboarding = ({}: AuthScreenProps<authScreenNames.ONBOARDING>) => {
  const [currIndex, setCurrIndex] = useState<number>(0);
  return (
    <AppWrapper bgColor={colors.white} style={styles.screen}>
      <ReanimatedCarousel
        data={onboardingData}
        renderItem={({ item, index }) => (
          <View style={styles.imgContainer} key={index}>
            <Image source={item?.image} contentFit='fill' style={styles.img} />
          </View>
        )}
        onSnapToItem={(index: number) => setCurrIndex(index)}
        pagingEnabled={true}
        width={screenWidth}
        loop={true}
        scrollAnimationDuration={500}
        autoPlay={true}
        autoPlayInterval={3000}
        containerStyle={{
          zIndex: 1,
        }}
      />
      <View style={styles.overlayContainer}>
        <View style={styles.carouselContainer}>
          {onboardingData &&
            onboardingData.map((__, index) => (
              <View
                key={index}
                style={[
                  styles.carousel,
                  {
                    backgroundColor:
                      index === currIndex ? colors.goldenRod : "#D9D9D9",
                  },
                ]}
              />
            ))}
        </View>
        <View style={styles.textContainer}>
          <CustomText type='semi-bold' size={25} black>
            {onboardingData[currIndex]?.title}
          </CustomText>
          <CustomText type='semi-bold' size={12} black>
            {onboardingData[currIndex]?.desc}
          </CustomText>
        </View>
        <View style={styles.continueContainer}>
          <CustomText size={15} type='semi-bold' black>
            Continue
          </CustomText>
          <TouchableOpacity style={styles.continueBtn}>
            <AntDesign
              name='arrowright'
              size={moderateScale(20)}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: moderateScale(0),
    paddingVertical: moderateScale(0),
  },
  imgContainer: {
    width: "100%",
    height: "65%",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  overlayContainer: {
    position: "absolute",
    justifyContent: "space-between",
    width: "100%",
    height: "44%",
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    backgroundColor: colors.white,
    bottom: moderateScale(20),
  },
  carouselContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(6),
    zIndex: 2,
    paddingHorizontal: moderateScale(30),
  },
  carousel: {
    width: DVW(2.5),
    height: DVH(1.25),
    borderRadius: moderateScale(100),
  },
  textContainer: {
    gap: moderateScale(5),
  },
  continueContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: moderateScale(10),
    zIndex: 2,
  },
  continueBtn: {
    padding: moderateScale(7),
    borderRadius: moderateScale(100),
    backgroundColor: colors.goldenRod,
  },
});
