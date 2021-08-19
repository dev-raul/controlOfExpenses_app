import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 46px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.background};
  padding: 0px 10px;
`;
