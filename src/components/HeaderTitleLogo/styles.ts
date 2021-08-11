import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const LogoTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${({theme}) => theme.colors.heading};
  font-family: ${({theme}) => theme.fonts.logoTitle};
`;
