import React, { useEffect, useRef } from "react";
import { View, ScrollView } from "react-native";
import { moderateScale, verticalScale } from "@src/resources/responsiveness";
import { VerticalStepper } from "../components/vertical-stepper";
import { HorizontalStepper } from "../components/horizontal-stepper";
import { DotOnlyStepper } from "../components/dotonly-stepper";
import { ScrollableVerticalStepper } from "../components/scrollable-vertical-stepper";
import { LineStepper } from "../components/line-stepper";

export type stepperPropType = {
  doNotShowTitle?: boolean;
  formSteps: string[];
  activeStep: number;
  submittedSteps: number[];
  inactiveBgColor?: `#${string}`;
  activeBgColor?: `#${string}`;
  submittedBgColor?: `#${string}`;
  stepperType?:
    | "horizontal-title"
    | "vertical-title"
    | "dot-only"
    | "scrollable-vertical-title"
    | "line-stepper";
  lineWidth?: number;
  lineHeight?: number;
};

export const FormStepper: React.FC<stepperPropType> = ({
  doNotShowTitle,
  formSteps,
  activeStep,
  submittedSteps,
  inactiveBgColor,
  activeBgColor,
  submittedBgColor,
  stepperType,
  lineWidth,
  lineHeight,
}) => {
  const subSteps = submittedSteps && submittedSteps.map((item) => item);
  const lastLengthOfData = formSteps && formSteps.length - 1;
  const scrollViewRef = useRef<ScrollView | any>(null);
  const itemRefs = useRef<(View | null | any)[]>([]);

  const getActiveStepColorAndIcon = (index: number) => {
    let color = "";

    //for activeness
    if (activeStep === index) {
      color = "crimson";
      return {
        bgColor: activeBgColor ? activeBgColor : color,
        submitted: false,
      };
    } else {
      //for submitted
      if (subSteps.includes(index)) {
        color = "green";
        return {
          bgColor: submittedBgColor ? submittedBgColor : color,
          submitted: true,
        };
      } else {
        color = "#bab5b5";
        return {
          bgColor: inactiveBgColor ? inactiveBgColor : color,
          submitted: false,
        };
      }
    }
  };

  const scrollToSubmitted = () => {
    if (scrollViewRef.current && itemRefs.current[activeStep]) {
      itemRefs.current[activeStep]?.measureLayout(
        scrollViewRef.current,
        (x: number, y: number) => {
          scrollViewRef.current?.scrollTo({ x, animated: true });
        }
      );
    }
  };

  useEffect(() => {
    if (
      stepperType === "horizontal-title" ||
      stepperType === "dot-only" ||
      stepperType === "scrollable-vertical-title"
    ) {
      scrollToSubmitted();
    }
  }, [activeStep, stepperType]);

  return (
    <View
      style={{
        paddingTop: verticalScale(5),
      }}>
      {!stepperType || stepperType === "vertical-title" ? (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: verticalScale(10),
          }}>
          {formSteps &&
            formSteps.map((item, index) => {
              const { submitted, bgColor } = getActiveStepColorAndIcon(index);
              return (
                <View key={index}>
                  <VerticalStepper
                    doNotShowTitle={doNotShowTitle}
                    bgColor={bgColor}
                    submitted={submitted}
                    lastLengthOfData={lastLengthOfData}
                    item={item}
                    index={index}
                    textColor={bgColor}
                    key={index}
                  />
                </View>
              );
            })}
        </View>
      ) : stepperType === "horizontal-title" ? (
        <View
          style={{
            paddingVertical: moderateScale(10),
            alignSelf: "center",
            width: "100%",
          }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ref={scrollViewRef}>
            {formSteps &&
              formSteps.map((item, index) => {
                const { submitted, bgColor } = getActiveStepColorAndIcon(index);
                return (
                  <View
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}>
                    <HorizontalStepper
                      doNotShowTitle={doNotShowTitle}
                      bgColor={bgColor}
                      submitted={submitted}
                      lastLengthOfData={lastLengthOfData}
                      item={item}
                      index={index}
                      textColor={bgColor}
                      key={index}
                    />
                  </View>
                );
              })}
          </ScrollView>
        </View>
      ) : stepperType === "dot-only" ? (
        <View
          style={{
            paddingVertical: moderateScale(10),
            alignSelf: "center",
            width: "100%",
          }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ref={scrollViewRef}>
            {formSteps &&
              formSteps.map((item, index) => {
                const { submitted, bgColor } = getActiveStepColorAndIcon(index);
                return (
                  <View
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}>
                    <DotOnlyStepper
                      bgColor={bgColor}
                      submitted={submitted}
                      lastLengthOfData={lastLengthOfData}
                      item={item}
                      index={index}
                      textColor={bgColor}
                      key={index}
                    />
                  </View>
                );
              })}
          </ScrollView>
        </View>
      ) : stepperType === "scrollable-vertical-title" ? (
        <View
          style={{
            paddingVertical: moderateScale(10),
            alignSelf: "center",
            width: "100%",
          }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ref={scrollViewRef}>
            {formSteps &&
              formSteps.map((item, index) => {
                const { submitted, bgColor } = getActiveStepColorAndIcon(index);
                return (
                  <View
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}>
                    <ScrollableVerticalStepper
                      doNotShowTitle={doNotShowTitle}
                      bgColor={bgColor}
                      submitted={submitted}
                      lastLengthOfData={lastLengthOfData}
                      item={item}
                      index={index}
                      textColor={bgColor}
                      key={index}
                    />
                  </View>
                );
              })}
          </ScrollView>
        </View>
      ) : stepperType === "line-stepper" ? (
        <View
          style={{
            paddingVertical: moderateScale(10),
            alignSelf: "center",
            width: "100%",
          }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ref={scrollViewRef}>
            {formSteps &&
              formSteps.map((item, index) => {
                const { submitted, bgColor } = getActiveStepColorAndIcon(index);
                return (
                  <View
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}>
                    <LineStepper
                      bgColor={bgColor}
                      submitted={submitted}
                      lastLengthOfData={lastLengthOfData}
                      item={item}
                      index={index}
                      textColor={bgColor}
                      key={index}
                      lineWidth={Number(lineWidth)}
                      lineHeight={Number(lineHeight)}
                    />
                  </View>
                );
              })}
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};
