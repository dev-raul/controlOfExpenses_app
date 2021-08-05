import {Button, Container, Input} from '@components';
import {SignInSchemaValidatorData} from '@helpers';
import {Formik} from 'formik';
import React, {useCallback, useRef} from 'react';
import {Dimensions, TextInput} from 'react-native';
import Lottie from 'lottie-react-native';
import {Content, Header, Main, Footer, LogoText, Form} from './styles';
import logoMoneyLottie from '../../../assets/lottie/graph.json';
interface SignInData {
  username: string;
  password: string;
}
const {width} = Dimensions.get('screen');
export const SignIn = () => {
  const passwordRef = useRef<TextInput>(null);
  const handleSingIn = useCallback((values: SignInData) => {
    console.log(values);
  }, []);

  return (
    <Container>
      <Content>
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
            <Form>
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
                  placeholder="Username"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  error={touched.username ? errors.username : ''}
                  autoCorrect={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current?.focus()}
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
                />
              </Main>
              <Footer>
                <Button onPress={handleSubmit} text="Entrar" />
              </Footer>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};
