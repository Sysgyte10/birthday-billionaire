import { authScreenNames } from "@src/navigation/navigation-names";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { Text } from "react-native";

export const Login = ({}: AuthScreenProps<authScreenNames.LOGIN>) => {
  return (
    <AppWrapper safeArea>
      <Text>Login</Text>
    </AppWrapper>
  );
};
