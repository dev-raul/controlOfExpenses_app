import styled from 'styled-components/native';

export const ScrollContent = styled.View`
  flex: 1;
  width: 100%;
`;
export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
  padding: 0px 50px;
`;
