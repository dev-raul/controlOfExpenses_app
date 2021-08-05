import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background-color: ${({theme}) => theme.colors.background};
  padding: 0px 50px;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;
export const Main = styled.View`
  padding: 10px 0;
  width: 100%;
`;
export const Footer = styled.View`
  width: 100%;
`;
export const LogoText = styled.Text`
  font-size: 32px;
  text-align: center;
  color: ${({theme}) => theme.colors.heading};
  font-family: ${({theme}) => theme.fonts.logoTitle};
`;

export const Form = styled.View`
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
