import {Container} from '@components';
import {darken, lighten} from 'polished';
import React from 'react';
import {useTheme} from 'styled-components';
import {shadowStyle} from '../../styles';
import {
  Balance,
  Content,
  ScrollContent,
  UserInfo,
  BalanceTitle,
} from './styles';

const Extracts = () => {
  const {colors} = useTheme();
  return (
    <Container>
      <ScrollContent>
        <Content>
          <UserInfo
            colors={[
              lighten(0.1, colors.primary),
              colors.primary,
              darken(0.2, colors.primary),
            ]}
            start={{x: 0.0, y: 0}}
            end={{x: 1, y: 0}}
            style={[shadowStyle.light, {shadowColor: colors.primary}]}>
            <BalanceTitle>Saldo do mês:</BalanceTitle>
            <Balance>R$ 236.678,00</Balance>
          </UserInfo>
        </Content>
      </ScrollContent>
    </Container>
  );
};

export default Extracts;
