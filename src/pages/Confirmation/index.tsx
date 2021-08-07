import {Button, Container} from '@components';
import {useRoute} from '@react-navigation/core';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ConfirmationParams} from '../../@types';

import {
  Content,
  ScrollContent,
  Emotion,
  Description,
  ButtonView,
} from './styles';

export const Confirmation = () => {
  const routes = useRoute();
  const startAnimated = useSharedValue(0);

  const {
    emotion,
    description,
    buttonText = 'Confirmar',
    onConfirm,
  } = routes.params as ConfirmationParams;

  const [loading, setLoading] = useState(false);
  const handleConfirmation = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (onConfirm) {
        onConfirm();
      }
    }, 5000);
  }, [onConfirm]);

  useEffect(() => {
    startAnimated.value = withTiming(1, {
      duration: 1200,
      easing: Easing.ease,
    });
  }, [startAnimated]);

  const fadeStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        startAnimated.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  }, [startAnimated.value]);

  const buttonStyle = useAnimatedStyle(() => {
    const translateY = Math.round(
      interpolate(startAnimated.value, [0, 1], [30, 0], Extrapolate.CLAMP),
    );

    return {
      transform: [{translateY}],
    };
  }, [startAnimated.value]);

  return (
    <Container>
      <ScrollContent>
        <Content>
          <Emotion>{emotion}</Emotion>
          <Description style={fadeStyle}>{description}</Description>
          <ButtonView style={buttonStyle}>
            <Button
              loading={loading}
              onPress={handleConfirmation}
              text={buttonText}
            />
          </ButtonView>
        </Content>
      </ScrollContent>
    </Container>
  );
};
