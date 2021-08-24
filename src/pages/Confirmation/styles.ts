import {Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
const {width} = Dimensions.get('screen');
export const ScrollContent = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background};
  padding: 0px ${width * 0.1}px;
`;
export const Emotion = styled.Text`
  font-size: 40px;
  text-align: center;
`;
export const Description = styled(Animated.Text)`
  margin-top: 15px;
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({theme}) => theme.colors.heading};
  font-family: ${({theme}) => theme.fonts.text};
`;

export const ButtonView = styled(Animated.View)`
  width: 100%;
  margin-top: 15px;
`;
