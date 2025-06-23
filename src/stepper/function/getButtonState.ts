export const getButtonBtnState = (
  activeStepNumb: number,
  arrLengthVal: number,
  lastBtnTextValue?: string,
  processingBtnTxtValue?: string
) => {
  if (activeStepNumb !== arrLengthVal) {
    return processingBtnTxtValue ? processingBtnTxtValue : "Next";
  } else if (activeStepNumb === arrLengthVal) {
    return lastBtnTextValue ? lastBtnTextValue : "Submit";
  }
};
