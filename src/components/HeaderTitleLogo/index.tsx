import React from 'react';

import {Container, LogoTitle} from './styles';
import Lottie from 'lottie-react-native';
import logoMoneyLottie from '../../assets/lottie/graph.json';
const HEADER_HEIGHT = 30;
export const HeaderTitleLogo = () => {
  return (
    <Container>
      <LogoTitle>MyMoney</LogoTitle>
      <Lottie
        style={{
          height: HEADER_HEIGHT,
        }}
        resizeMode="contain"
        source={logoMoneyLottie}
        autoPlay
      />
    </Container>
  );
};
