import {rgba} from 'polished';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 5px;
`;
interface TextInputProps {
  isFocused?: boolean;
  isValue?: boolean;
  isError?: boolean;
}
export const TextInput = styled.TextInput<TextInputProps>`
  border-bottom-width: 1.5px;
  border-bottom-color: ${({isFocused, isValue, theme}) =>
    isFocused || isValue ? theme.colors.primary : theme.colors.gray};
  color: ${({theme}) => theme.colors.background};
  font-size: 18px;
  text-align: center;
  padding: 0 15px;
  height: 46px;
  width: 100%;
  background: ${({theme}) => rgba(theme.colors.heading, 0.03)};
  border-radius: 4px;

  ${({isError, theme}) =>
    isError &&
    css`
      border-bottom-color: ${theme.colors.red};
    `}
`;
