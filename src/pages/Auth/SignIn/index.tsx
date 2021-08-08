import {Button, Container, Input} from '@components';
import {
  SignInSchemaValidatorData,
  SignUpUserNameSchemaValidatorData,
} from '@helpers';
import {Formik} from 'formik';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions, TextInput} from 'react-native';
import Lottie from 'lottie-react-native';
import {
  ScrollContent,
  Content,
  Header,
  Main,
  Footer,
  LogoText,
  Form,
  RedirectSignUp,
  RedirectSignUpText,
  RedirectForgetPassword,
  RedirectForgetPasswordText,
} from '../styles';
import logoMoneyLottie from '../../../assets/lottie/graph.json';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'styled-components';
import {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/core';
import {SignUpParamsParams} from '../../../@types';
interface SignInData {
  username: string;
  password: string;
}

const {width} = Dimensions.get('screen');
export const SignIn = () => {
  const {colors} = useTheme();
  const {navigate} = useNavigation();
  const [loading, setLoading] = useState(false);

  const SidnUpParams: SignUpParamsParams = {
    initialValues: {username: ''},
    emotion: '😃️',
    subTitle: 'Precisamos que você informe seu username',
    handleSubmit: values => {
      console.log('values teste', values);
    },
    SingUpValidatorSchema: SignUpUserNameSchemaValidatorData,
    page: 'username',
  };
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

  const passwordRef = useRef<TextInput>(null);
  const handleSingIn = useCallback((values: SignInData) => {
    console.log(values);
    setLoading(true);
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <Container>
      <Content>
        <ScrollContent>
          <Formik
            validationSchema={SignInSchemaValidatorData}
            initialValues={{username: '', password: ''}}
            onSubmit={handleSingIn}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              touched,
              errors,
              values,
            }) => (
              <Form style={fadeStyle}>
                <Header>
                  <Lottie
                    style={{height: width * 0.6}}
                    resizeMode="contain"
                    source={logoMoneyLottie}
                    autoPlay
                  />
                  <LogoText>MyMoney</LogoText>
                </Header>
                <Main>
                  <Input
                    placeholder="Usuário"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    error={touched.username ? errors.username : ''}
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="next"
                    onSubmitEditing={() => passwordRef.current?.focus()}
                    editable={!loading}
                  />
                  <Input
                    ref={passwordRef}
                    placeholder="Senha"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    error={touched.password ? errors.password : ''}
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit}
                    editable={!loading}
                  />
                  <RedirectForgetPassword
                    onPress={() => navigate('ForgetPassword' as never)}>
                    <RedirectForgetPasswordText>
                      Esqueceu sua senha?{' '}
                      <FontAwesome
                        name="arrow-circle-right"
                        color={colors.heading}
                        size={16}
                      />
                    </RedirectForgetPasswordText>
                  </RedirectForgetPassword>
                </Main>
                <Footer style={footerButtonStyle}>
                  <Button
                    loading={loading}
                    onPress={handleSubmit}
                    text="Entrar"
                  />
                </Footer>
                <RedirectSignUp
                  onPress={() =>
                    navigate('SignUp' as never, SidnUpParams as never)
                  }>
                  <RedirectSignUpText>Não tem conta?</RedirectSignUpText>
                  <RedirectSignUpText style={{color: colors.primary}}>
                    Inscreva-se
                  </RedirectSignUpText>
                </RedirectSignUp>
              </Form>
            )}
          </Formik>
        </ScrollContent>
      </Content>
    </Container>
  );
};
