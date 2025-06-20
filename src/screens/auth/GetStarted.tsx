import { authScreenNames } from "@src/navigation/navigation-names";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { Text } from "react-native";

export const GetStarted =
  ({}: AuthScreenProps<authScreenNames.GET_STARTED>) => {
    return (
      <AppWrapper safeArea>
        <Text>Get Started</Text>
      </AppWrapper>
    );
  };
