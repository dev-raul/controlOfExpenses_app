import styled from 'styled-components/native';

export const ContainerArea = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`;
export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background-color: ${({theme}) => theme.colors.background};
  padding: 0px 50px;
`;
