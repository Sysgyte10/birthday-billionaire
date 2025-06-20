import { appScreenNames } from "@src/navigation/navigation-names";
import { RootStackScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { Text } from "react-native";

export const Profile = ({}: RootStackScreenProps<appScreenNames.PROFILE>) => {
  return (
    <AppWrapper safeArea>
      <Text>Profile</Text>
    </AppWrapper>
  );
};
