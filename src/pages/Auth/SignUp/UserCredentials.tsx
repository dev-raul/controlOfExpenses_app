import {Button, Input} from '@components';
import {UserNameSchemaValidatorData} from '@helpers';
import {useNavigation} from '@react-navigation/core';
import {Formik} from 'formik';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {SignUp} from '.';
import {Footer, Main} from '../styles';

interface FormirValuesInputs {
  username: string;
  password: string;
  passwordConfirmation: string;
}

const initialValues: FormirValuesInputs = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

export const UserCredentials = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const startAnimated = useSharedValue(0);
  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmationRef = useRef<TextInput>(null);
  useEffect(() => {
    startAnimated.value = withTiming(1, {
      duration: 1200,
      easing: Easing.ease,
    });
  }, [startAnimated]);

  const fadeStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        startAnimated.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  }, [startAnimated.value]);

  const footerButtonStyle = useAnimatedStyle(() => {
    const translateY = Math.round(
      interpolate(startAnimated.value, [0, 1], [30, 0], Extrapolate.CLAMP),
    );

    return {
      transform: [{translateY}],
    };
  }, [startAnimated.value]);
  const handleSubmit = useCallback(
    (values: FormirValuesInputs) => {
      console.log('values teste', values);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('SignIn' as never);
      }, 3000);
    },
    [navigation],
  );

  return (
    <SignUp
      emotion="🔐️"
      subTitle="Para finalizar o cadastro informe suas credenciais">
      <Formik
        validationSchema={UserNameSchemaValidatorData}
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
            <Main style={fadeStyle}>
              <Input
                placeholder="Usuário"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                error={touched.username ? errors.username : ''}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="send"
                onSubmitEditing={() => passwordRef.current?.focus()}
                editable={!loading}
              />
              <Input
                ref={passwordRef}
                secureTextEntry
                placeholder="Senha"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={touched.password ? errors.password : ''}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
                editable={!loading}
              />
              <Input
                ref={passwordConfirmationRef}
                secureTextEntry
                placeholder="Confirmar Senha"
                onChangeText={handleChange('passwordConfirmation')}
                onBlur={handleBlur('passwordConfirmation')}
                value={values.passwordConfirmation}
                error={
                  touched.passwordConfirmation
                    ? errors.passwordConfirmation
                    : ''
                }
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={handleSubmitFormik}
                editable={!loading}
              />
            </Main>
            <Footer style={footerButtonStyle}>
              <Button
                loading={loading}
                onPress={handleSubmitFormik}
                text="Cadastrar"
              />
            </Footer>
          </>
        )}
      </Formik>
    </SignUp>
  );
};
