import React from 'react';
import {Input} from '@components';
import {NavigationProp} from '@react-navigation/core';
import {FormikProps} from 'formik';
import {SignUpParamsParams} from '../../../@types';
import {UserEmailSchemaValidatorData} from '@helpers';
interface UserEmailProps
  extends Omit<FormikProps<Object>, 'values' | 'touched'> {
  loading?: boolean;
  values: any;
  touched: any;
  errors: any;
}
export const getConfigNavigationUserEmail = (
  navigation: NavigationProp<{}>,
): SignUpParamsParams => {
  // const {navigate} = navigation;
  return {
    initialValues: {email: ''},
    emotion: '😃️',
    subTitle: 'Agora precisamos que você informe seu email',
    handleSubmit: values => {
      console.log('values teste', values);
      // navigate('SignUp' as never);
    },
    SingUpValidatorSchema: UserEmailSchemaValidatorData,
    page: 'email',
  };
};

export const UserEmail = ({
  loading,
  handleChange,
  handleBlur,
  values,
  touched,
  errors,
  handleSubmit,
  ...props
}: UserEmailProps) => {
  return (
    <>
      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        error={touched.email ? errors.email : ''}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={handleSubmit}
        editable={!loading}
        {...props}
      />
    </>
  );
};
