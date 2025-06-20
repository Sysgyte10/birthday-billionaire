import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabBarStackParamList } from "./types";
import { bottomTabScreens } from "@src/navigation/bottom-tab-screen";
import { DVH, DVW } from "@src/resources/responsiveness";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { CustomText } from "@src/components/shared";
import { bottomTabScreenNames } from "@src/navigation";
import { Image } from "expo-image";
import { colors } from "@src/resources/color/color";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator<BottomTabBarStackParamList>();

export const BottomTabStack = () => {
  const insets = useSafeAreaInsets();
  const renderBottomTabIcon = (src: ImageSourcePropType) => {
    return (
      <View style={styles.iconContainer}>
        <Image source={src} contentFit='cover' style={styles.icon} />
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          height: 52 + insets.bottom,
          paddingBottom: insets.bottom,
        },
        tabBarLabel: ({ focused }) =>
          focused ? (
            <CustomText type='medium' size={13} goldenRod>
              {route?.name}
            </CustomText>
          ) : (
            <CustomText type='regular' size={13} lightGrey>
              {route?.name}
            </CustomText>
          ),
        tabBarIcon: ({ focused }) =>
          focused && route.name === bottomTabScreenNames.HOME_STACK
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/home-focused.png")
              )
            : !focused && route.name === bottomTabScreenNames.HOME_STACK
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/home-nfocused.png")
              )
            : focused && route.name === bottomTabScreenNames.LOTTERY_STACK
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/lottery-focused.png")
              )
            : !focused && route.name === bottomTabScreenNames.LOTTERY_STACK
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/lottery-nfocused.png")
              )
            : focused && route.name === bottomTabScreenNames.MESSAGE_STACK
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/messages-focused.png")
              )
            : !focused && route.name === bottomTabScreenNames.MESSAGE_STACK
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/messages-nfocused.png")
              )
            : focused && route.name === bottomTabScreenNames.GIFT_STACK
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/gift-focused.png")
              )
            : !focused && route.name === bottomTabScreenNames.GIFT_STACK
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/gift-nfocused.png")
              )
            : focused && route.name === bottomTabScreenNames.PROFILE_STACK
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/profile-nfocused.png")
              )
            : !focused && route.name === bottomTabScreenNames.PROFILE_STACK
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/profile-nfocused.png")
              )
            : undefined,
      })}>
      {bottomTabScreens &&
        bottomTabScreens.map((screen, index) => (
          <Tab.Screen
            name={screen.screenName}
            key={index}
            component={screen.component}
          />
        ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: DVW(7),
    height: DVH(3.5),
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
});
