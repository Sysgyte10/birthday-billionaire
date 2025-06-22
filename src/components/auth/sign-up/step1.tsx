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
            titleStyle={styles.inputTitle}
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
    gap: moderateScale(10),
    marginTop: moderateScale(25),
  },
  inputTitle: {
    fontSize: moderateScale(12),
  },
});
