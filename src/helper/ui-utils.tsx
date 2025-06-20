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
