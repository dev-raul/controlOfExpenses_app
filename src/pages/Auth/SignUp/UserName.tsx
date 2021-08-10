import {Button, Input} from '@components';
import {UserNameSchemaValidatorData} from '@helpers';
import {useNavigation} from '@react-navigation/core';
import {Formik} from 'formik';
import React, {useCallback, useEffect, useState} from 'react';
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
}

const initialValues: FormirValuesInputs = {username: ''};

export const UserName = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const startAnimated = useSharedValue(0);

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
        navigation.navigate('UserEmail' as never);
      }, 3000);
    },
    [navigation],
  );

  return (
    <SignUp emotion="😃️" subTitle="Precisamos que você informe seu username">
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
                onSubmitEditing={handleSubmitFormik}
                editable={!loading}
              />
            </Main>
            <Footer style={footerButtonStyle}>
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
