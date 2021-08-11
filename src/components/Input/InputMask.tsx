import React, {forwardRef} from 'react';
import {TextInputMaskProps} from 'react-native-text-input-mask';
import {useTheme} from 'styled-components';

import {Container, ErrorMessage, TextInputMask} from './styles';
interface InputMaskProps extends TextInputMaskProps {
  error?: string;
}
const InputMask = ({error, ...props}: InputMaskProps, ref: any) => {
  const {colors} = useTheme();
  return (
    <Container>
      <TextInputMask
        ref={ref}
        isError={!!error}
        placeholderTextColor={colors.heading}
        {...props}
      />
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
export default forwardRef(InputMask);
