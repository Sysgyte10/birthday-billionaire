import { CustomInput } from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";

interface IStep1Props {
  formProps: any;
}

export const Step1: React.FC<IStep1Props> = ({ formProps }) => {
  const props = formProps;
  return (
    <View style={styles.formContainer}>
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            title='Full Name'
            titleType='medium'
            value={field.value}
            onChangeText={(valueEntered) => field.onChange(valueEntered)}
            keyboardType='default'
            type='custom'
            showErrorText
            error={props?.errors?.fullName?.message}
            placeholder='Enter you full name'
            placeHolderTextColor={"#717171"}
            titleStyle={styles.inputTitle}
            style={styles.input}
          />
        )}
        name='fullName'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            title='Email Address'
            titleType='medium'
            value={field.value}
            onChangeText={(valueEntered) => field.onChange(valueEntered)}
            keyboardType='default'
            type='custom'
            showErrorText
            error={props?.errors?.emailAddress?.message}
            placeholder='Enter you email address'
            placeHolderTextColor={"#717171"}
            titleStyle={styles.inputTitle}
          />
        )}
        name='emailAddress'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            title='Username'
            titleType='medium'
            value={field.value}
            onChangeText={(valueEntered) => field.onChange(valueEntered)}
            keyboardType='default'
            type='custom'
            showErrorText
            error={props?.errors?.userName?.message}
            placeholder='Enter you username'
            placeHolderTextColor={"#717171"}
            titleStyle={styles.inputTitle}
          />
        )}
        name='userName'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            title='Date of Birth'
            titleType='medium'
            value={field.value}
            onChangeText={(valueEntered) => field.onChange(valueEntered)}
            keyboardType='default'
            type='custom'
            showErrorText
            error={props?.errors?.dob?.message}
            placeholder='Enter you date of birth'
            placeHolderTextColor={"#717171"}
            titleStyle={styles.inputTitle}
          />
        )}
        name='dob'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            title='Password'
            titleType='medium'
            value={field.value}
            onChangeText={(valueEntered) => field.onChange(valueEntered)}
            type='password'
            showErrorText
            error={props?.errors?.password?.message}
            placeholder='Enter your password'
            placeHolderTextColor={"#717171"}
            titleStyle={styles.inputTitle}
          />
        )}
        name='password'
        defaultValue=''
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: moderateScale(20),
    marginTop: moderateScale(25),
  },
  inputTitle: {
    fontSize: moderateScale(12),
  },
  input: {
    backgroundColor: "#F5F5F5",
  },
});
