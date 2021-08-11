import {Button, Input} from '@components';
import {UserProfileSchemaValidatorData} from '@helpers';
import {useNavigation} from '@react-navigation/core';
import {Formik} from 'formik';
import React, {useCallback, useEffect, useState} from 'react';
import {Platform, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {SignUp} from '.';
import {Footer, Main} from '../styles';
import {format, isDate} from 'date-fns';

interface FormirValuesInputs {
  name: string;
  birthDay: Date | null;
}

const initialValues: FormirValuesInputs = {name: '', birthDay: null};

export const UserProfile = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const startAnimated = useSharedValue(0);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(
    Platform.OS === 'ios',
  );

  const toggleShowDatePicker = useCallback(() => {
    setShowDatePicker(oldValue => !oldValue);
  }, []);

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

  const footerButtonStyle = useAnimatedStyle(() => {
    const translateY = Math.round(
      interpolate(startAnimated.value, [0, 1], [30, 0], Extrapolate.CLAMP),
    );

    return {
      transform: [{translateY}],
    };
  }, [startAnimated.value]);

  const handleSubmit = useCallback(
    (values: FormirValuesInputs) => {
      console.log('values teste', values);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('UserContact' as never);
      }, 3000);
    },
    [navigation],
  );

  return (
    <SignUp emotion="😊️" subTitle="Precisamos dos seus dados pessoais">
      <Formik
        validationSchema={UserProfileSchemaValidatorData}
        initialValues={initialValues}
        onSubmit={handleSubmit}>
        {({
          handleSubmit: handleSubmitFormik,
          handleChange,
          handleBlur,
          setFieldValue,
          values,
          touched,
          errors,
        }) => (
          <>
            <Main style={fadeStyle}>
              <Input
                placeholder="Nome"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                error={touched.name ? errors.name : ''}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={toggleShowDatePicker}
                editable={!loading}
              />
              {Platform.OS === 'android' && (
                <TouchableOpacity onPress={toggleShowDatePicker}>
                  <Input
                    placeholder="Nascimento"
                    onBlur={handleBlur('birthDay')}
                    value={
                      isDate(values.birthDay)
                        ? format(values.birthDay as Date, 'dd/MM/yyyy')
                        : ''
                    }
                    error={touched.birthDay ? (errors.birthDay as string) : ''}
                    editable={false}
                    pointerEvents="none"
                  />
                </TouchableOpacity>
              )}

              {showDatePicker && (
                <DateTimePicker
                  value={values.birthDay || new Date()}
                  //@ts-ignore
                  mode="datetime"
                  display="calendar"
                  onChange={(_, dateTime: Date | undefined) => {
                    if (Platform.OS === 'android') {
                      toggleShowDatePicker();
                    }
                    setFieldValue('birthDay', dateTime);
                  }}
                  maximumDate={new Date()}
                />
              )}
              {/* setFieldValue('birthDay', val); */}
            </Main>
            <Footer style={footerButtonStyle}>
              <Button
                loading={loading}
                onPress={handleSubmitFormik}
                text="Prosseguir"
              />
            </Footer>
          </>
        )}
      </Formik>
    </SignUp>
  );
};
