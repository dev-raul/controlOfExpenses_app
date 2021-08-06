import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, TextButton, ButtonLoading} from './styles';
interface ButtonComponentProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  text: string;
  backgroundColor?: string;
  textColor?: string;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconAlign?: 'left' | 'right';
}
export const Button = ({
  loading = false,
  text,
  textColor,
  disabled = false,
  backgroundColor,
  icon,
  iconAlign = 'left',
  children,
  ...props
}: ButtonComponentProps) => {
  return (
    <Container
      disabled={disabled || loading}
      backgroundColor={backgroundColor}
      {...props}>
      {children ? (
        children
      ) : (
        <>
          {icon && iconAlign === 'left' && icon}
          <TextButton textColor={textColor}>{text}</TextButton>
          {loading && <ButtonLoading color="#FFF" />}
          {icon && iconAlign === 'right' && icon}
        </>
      )}
    </Container>
  );
};
