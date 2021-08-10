import {Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
const {width} = Dimensions.get('screen');
export const ScrollContent = styled.View`
  flex: 1;
  width: 100%;
`;
export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
  padding: 0px ${width * 0.1}px;
  max-height: 600px;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;
export const Main = styled(Animated.View)`
  padding: 10px 0;
  width: 100%;
`;
export const Footer = styled(Animated.View)`
  width: 100%;
`;
export const LogoText = styled.Text`
  font-size: 32px;
  text-align: center;
  color: ${({theme}) => theme.colors.heading};
  font-family: ${({theme}) => theme.fonts.logoTitle};
`;
export const SubTitle = styled.Text`
  margin-top: 15px;
  font-size: 16px;
  text-align: center;
  color: ${({theme}) => theme.colors.heading};
  font-family: ${({theme}) => theme.fonts.text};
`;
export const RedirectForgetPassword = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin: 7px 0;
`;
export const RedirectForgetPasswordText = styled.Text`
  font-size: 14px;
  text-align: right;
  color: ${({theme}) => theme.colors.heading};
  font-family: ${({theme}) => theme.fonts.text};
  padding: 3px;
`;
export const RedirectSignUp = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin: 7px 0;
`;
export const RedirectSignUpText = styled.Text`
  font-size: 14px;
  text-align: center;
  color: ${({theme}) => theme.colors.heading};
  font-family: ${({theme}) => theme.fonts.text};
  padding: 3px;
`;
export const Form = styled(Animated.View)`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const FormHeader = styled(Animated.View)`
  width: 100%;
  align-items: center;
`;
export const FormBody = styled(Animated.View)`
  width: 100%;
  align-items: center;
`;
