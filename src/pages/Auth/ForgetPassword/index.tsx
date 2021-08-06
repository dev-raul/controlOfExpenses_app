import {Button, Container, Input} from '@components';
import {Formik} from 'formik';
import React, {useCallback, useEffect, useState} from 'react';
import Lottie from 'lottie-react-native';
import {
  ScrollContent,
  Content,
  Header,
  Main,
  Footer,
  SubTitle,
  Form,
} from '../styles';
import logoMoneyLottie from '../../../assets/lottie/graph.json';
import {Dimensions} from 'react-native';
import {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ForgetPasswordSchemaValidatorData} from '@helpers';
import {useNavigation} from '@react-navigation/core';
interface ForgetPasswordData {
  email: string;
}
const {width} = Dimensions.get('screen');
export const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const {navigate} = useNavigation();

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

  const handleForgetPassword = useCallback(
    (values: ForgetPasswordData) => {
      console.log(values);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate('Confirmation' as never);
      }, 5000);
    },
    [navigate],
  );
  return (
    <Container>
      <Content>
        <ScrollContent>
          <Formik
            validationSchema={ForgetPasswordSchemaValidatorData}
            initialValues={{email: ''}}
            onSubmit={handleForgetPassword}>
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
                  <SubTitle>
                    Informe o seu email para prosseguir com a recuperação 😀️
                  </SubTitle>
                </Header>
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
                    onSubmitEditing={handleSubmit}
                    editable={!loading}
                  />
                </Main>
                <Footer style={footerButtonStyle}>
                  <Button
                    loading={loading}
                    onPress={handleSubmit}
                    text="Confirmar"
                  />
                </Footer>
              </Form>
            )}
          </Formik>
        </ScrollContent>
      </Content>
    </Container>
  );
};
