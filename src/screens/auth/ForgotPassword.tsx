import { authScreenNames } from "@src/navigation/navigation-names";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { Text } from "react-native";

export const ForgotPassword =
  ({}: AuthScreenProps<authScreenNames.FORGOT_PASSWORD>) => {
    return (
      <AppWrapper safeArea>
        <Text>Forgot Password</Text>
      </AppWrapper>
    );
  };
