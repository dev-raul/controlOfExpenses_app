import React, {useCallback, useState} from 'react';
import {Button, Input} from '@components';
import {UserEmailSchemaValidatorData} from '@helpers';
import {SignUp} from '.';
import {Footer, Main} from '../styles';
import {Formik} from 'formik';
interface FormirValuesInputs {
  email: string;
}
const initialValues = {email: ''};
export const UserEmail = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = useCallback((values: FormirValuesInputs) => {
    console.log('values teste', values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <SignUp
      emotion="😃️"
      subTitle="Agora precisamos que você informe seu email">
      <Formik
        validationSchema={UserEmailSchemaValidatorData}
        initialValues={initialValues}
        onSubmit={handleSubmit}>
        {({
          handleSubmit: handleSubmitFormik,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
          <>
            <Main>
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={touched.email ? errors.email : ''}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="send"
                onSubmitEditing={handleSubmitFormik}
                editable={!loading}
              />
            </Main>
            <Footer>
              <Button
                loading={loading}
                onPress={handleSubmitFormik}
                text="Prosseguir"
              />
            </Footer>
          </>
        )}
      </Formik>
    </SignUp>
  );
};
