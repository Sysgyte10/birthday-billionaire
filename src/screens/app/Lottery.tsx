import { appScreenNames } from "@src/navigation/navigation-names";
import { RootStackScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { Text } from "react-native";

export const Lottery = ({}: RootStackScreenProps<appScreenNames.LOTTERY>) => {
  return (
    <AppWrapper safeArea>
      <Text>Lottery</Text>
    </AppWrapper>
  );
};
