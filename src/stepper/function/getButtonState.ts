export const getButtonBtnState = (
  activeStepNumb: number,
  arrLengthVal: number,
  lastBtnTextValue?: string
) => {
  if (activeStepNumb !== arrLengthVal) {
    return "Continue";
  } else if (activeStepNumb === arrLengthVal) {
    return lastBtnTextValue ? lastBtnTextValue : "Submit";
  }
};
