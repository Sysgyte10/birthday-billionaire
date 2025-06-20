import { authScreenNames } from "@src/navigation/navigation-names";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { CustomButton, CustomText } from "@src/components/shared";

export const Onboarding = ({}: AuthScreenProps<authScreenNames.ONBOARDING>) => {
  return (
    <AppWrapper safeArea>
      <CustomText type='regular' size={17} black>
        Onboarding
      </CustomText>
      <CustomButton
        title='Onboarding'
        goldenRod
        textWhite
        buttonType='Solid'
        textSize={15}
        onPress={() => {}}
        textType='medium'
      />
    </AppWrapper>
  );
};
