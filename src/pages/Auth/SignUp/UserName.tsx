import {Input} from '@components';
import {FormikProps} from 'formik';
import React from 'react';
interface FormirValuesInputs {
  username: string;
}
interface UserNameProps
  extends Omit<FormikProps<Object>, 'values' | 'touched'> {
  loading?: boolean;
  values: any;
  touched: any;
  errors: any;
}
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
