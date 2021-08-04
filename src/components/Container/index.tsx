import React from 'react';
import {Keyboard, Platform, TouchableWithoutFeedback} from 'react-native';

import {ContainerArea, KeyboardAvoidingView} from './styles';
interface ContainerComponentProps {
  children: React.ReactNode;
}
export const Container = ({children}: ContainerComponentProps) => {
  return (
    <ContainerArea>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ContainerArea>
  );
};
