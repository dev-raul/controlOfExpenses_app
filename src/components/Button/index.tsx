import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, TextButton} from './styles';
interface ButtonComponentProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  text: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconAlign?: 'left' | 'right';
}
export const Button = ({
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
    <Container disabled={disabled} backgroundColor={backgroundColor} {...props}>
      {children ? (
        children
      ) : (
        <>
          {icon && iconAlign === 'left' && icon}
          <TextButton textColor={textColor}>{text}</TextButton>
          {icon && iconAlign === 'right' && icon}
        </>
      )}
    </Container>
  );
};
