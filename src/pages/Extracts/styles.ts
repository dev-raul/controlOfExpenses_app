import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
export const Content = styled.View``;
export const ScrollContent = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
export const UserInfo = styled(LinearGradient)`
  margin: ${width * 0.04}px;
  padding: ${width * 0.01}px;
  height: 100px;
  flex-direction: column;
  border-radius: 8px;
  background-color: red;
  justify-content: center;
  align-items: center;
`;
export const BalanceTitle = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.text};
`;
export const Balance = styled.Text`
  font-size: 25px;
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.heading};
`;
