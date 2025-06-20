import { bottomTabScreenTypes } from "@src/types/types";
import { bottomTabScreenNames } from "./navigation-names";
import * as Screen from "@src/screens/app/bottom-tab";

export const bottomTabScreens: bottomTabScreenTypes[] = [
  {
    screenName: bottomTabScreenNames.HOME_STACK,
    component: Screen.HomeStack,
  },
  {
    screenName: bottomTabScreenNames.LOTTERY_STACK,
    component: Screen.LotteryStack,
  },
  {
    screenName: bottomTabScreenNames.GIFT_STACK,
    component: Screen.GiftStack,
  },
  {
    screenName: bottomTabScreenNames.LOTTERY_STACK,
    component: Screen.LotteryStack,
  },
  {
    screenName: bottomTabScreenNames.PROFILE_STACK,
    component: Screen.ProfileStack,
  },
];
