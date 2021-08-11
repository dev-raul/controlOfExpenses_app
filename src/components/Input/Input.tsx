import React, {forwardRef} from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components';

import {Container, ErrorMessage, TextInput} from './styles';
interface InputProps extends TextInputProps {
  error?: string;
}
const Input = ({error, ...props}: InputProps, ref: any) => {
  const {colors} = useTheme();
  return (
    <Container>
      <TextInput
        ref={ref}
        isError={!!error}
        placeholderTextColor={colors.heading}
        {...props}
      />
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
export default forwardRef(Input);
