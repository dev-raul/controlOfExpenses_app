import React from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components';

import {Container, ErrorMessage, TextInput} from './styles';
interface InputProps extends TextInputProps {
  error?: string;
}
export const Input = ({error, ...props}: InputProps) => {
  const {colors} = useTheme();
  return (
    <Container>
      <TextInput
        isError={!!error}
        placeholderTextColor={colors.heading}
        {...props}
      />
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
