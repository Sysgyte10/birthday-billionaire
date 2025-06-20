import { authScreenNames } from "@src/navigation/navigation-names";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { Text } from "react-native";

export const VerificationCode =
  ({}: AuthScreenProps<authScreenNames.VERIFICATION_CODE>) => {
    return (
      <AppWrapper safeArea>
        <Text>Verification Code</Text>
      </AppWrapper>
    );
  };
