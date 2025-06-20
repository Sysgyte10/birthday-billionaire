import { appScreenNames } from "@src/navigation/navigation-names";
import { RootStackScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { Text } from "react-native";

export const Home = ({}: RootStackScreenProps<appScreenNames.HOME>) => {
  return (
    <AppWrapper safeArea>
      <Text>Home</Text>
    </AppWrapper>
  );
};
