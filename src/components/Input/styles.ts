import {rgba} from 'polished';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 5px 0px;
`;
interface TextInputProps {
  isFocused?: boolean;
  isValue?: boolean;
  isError?: boolean;
}
export const TextInput = styled.TextInput<TextInputProps>`
  border-width: 1.5px;
  border-color: ${({isFocused, isValue, theme}) =>
    isFocused || isValue ? theme.colors.primary : theme.colors.gray};
  color: ${({theme}) => theme.colors.heading};
  font-size: 14px;
  padding: 0 15px;
  height: 46px;
  width: 100%;
  background: ${({theme}) => rgba(theme.colors.shape, 0.03)};
  border-radius: 6px;

  ${({isError, theme}) =>
    isError &&
    css`
      border-color: ${theme.colors.red};
    `}
`;

export const ErrorMessage = styled.Text`
  font-size: 12px;
  text-align: right;
  color: ${({theme}) => theme.colors.heading};
  margin-top: 5px;
  font-family: ${({theme}) => theme.fonts.heading};
  color: ${({theme}) => theme.colors.red};
`;
