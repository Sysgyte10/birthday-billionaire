import { RefObject } from "react";
import { IGlobalModalMessageRef } from "@src/common";

let modalRef: RefObject<IGlobalModalMessageRef | null> | null = null;

export const ModalMessageProvider = {
  setRef: (ref: RefObject<IGlobalModalMessageRef | null>) => {
    modalRef = ref;
  },
  showModalMsg: (msg: Parameters<IGlobalModalMessageRef["show"]>[0]) => {
    modalRef?.current?.show(msg);
  },
};

export const returnSignUpFormHeader = (index: number) => {
  switch (index) {
    case 1:
      return {
        title: "Get Started",
        description: "Let's get you on board",
      };
    case 2:
      return {
        title: "Let's get to Know you a little bit",
        description: "Tell us something we can save your profile",
      };
    default:
      break;
  }
};
