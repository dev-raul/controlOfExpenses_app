import {Container, Input} from '@components';
import {Formik} from 'formik';
import React, {useCallback} from 'react';
import {Button} from 'react-native';
import {SignInSchemaValidatorData} from '../../../helpers/validators';
import {Content, Form} from './styles';

interface SignInData {
  email: string;
  password: string;
}

export const SignIn = () => {
  const handleSingIn = useCallback((values: SignInData) => {
    console.log(values);
  }, []);

  return (
    <Container>
      <Content>
        <Formik
          validationSchema={SignInSchemaValidatorData}
          initialValues={{email: '', password: ''}}
          onSubmit={handleSingIn}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            errors,
            values,
          }) => (
            <Form>
              <Input
                placeholder="E-mail"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={touched.email ? errors.email : ''}
              />
              <Input
                placeholder="Senha"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={touched.password ? errors.password : ''}
              />
              <Button onPress={handleSubmit} title="Submit" />
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};
