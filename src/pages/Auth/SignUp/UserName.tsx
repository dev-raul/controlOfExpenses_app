import {Input} from '@components';
import {UserNameSchemaValidatorData} from '@helpers';
import {NavigationProp} from '@react-navigation/core';
import {FormikProps} from 'formik';
import React from 'react';
interface FormirValuesInputs {
  username: string;
}
import {SignUpParamsParams} from '../../../@types';
import {getConfigNavigationUserEmail} from './UserEmail';
interface UserNameProps
  extends Omit<FormikProps<Object>, 'values' | 'touched'> {
  loading?: boolean;
  values: any;
  touched: any;
  errors: any;
}

export const getConfigNavigationUserName = (
  navigation: NavigationProp<{}>,
): SignUpParamsParams => {
  const {navigate} = navigation;
  return {
    initialValues: {username: ''},
    emotion: '😃️',
    subTitle: 'Precisamos que você informe seu username',
    handleSubmit: values => {
      console.log('values teste', values);
      const params = getConfigNavigationUserEmail(navigation);
      navigate('UserName' as never, params as never);
    },
    SingUpValidatorSchema: UserNameSchemaValidatorData,
    page: 'username',
  };
};

export const UserName = ({
  loading,
  handleChange,
  handleBlur,
  values,
  touched,
  errors,
  handleSubmit,
  ...props
}: UserNameProps) => {
  return (
    <>
      <Input
        placeholder="Usuário"
        onChangeText={handleChange('username')}
        onBlur={handleBlur('username')}
        value={values.username}
        error={touched.username ? errors.username : ''}
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
