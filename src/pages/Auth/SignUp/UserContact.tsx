import React, {useCallback, useRef, useState} from 'react';
import {Button, Input, InputMask} from '@components';
import {UserEmailSchemaValidatorData} from '@helpers';
import {SignUp} from '.';
import {Footer, Main} from '../styles';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/core';
import {TextInput} from 'react-native';

interface FormirValuesInputs {
  email: string;
  phone: string;
}
const initialValues: FormirValuesInputs = {email: '', phone: ''};
export const UserContact = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const phoneRef = useRef<TextInput>(null);
  const handleSubmit = useCallback(
    (values: FormirValuesInputs) => {
      console.log('values teste', values);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('UserCredentials' as never);
      }, 3000);
    },
    [navigation],
  );

  return (
    <SignUp emotion="😃️" subTitle="Agora precisamos do seu contato">
      <Formik
        validationSchema={UserEmailSchemaValidatorData}
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
            <Main>
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={touched.email ? errors.email : ''}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => phoneRef.current?.focus()}
                editable={!loading}
              />
              <InputMask
                ref={phoneRef}
                placeholder="Telefone"
                keyboardType="number-pad"
                onChangeText={(_, extracted) =>
                  setFieldValue('phone', extracted)
                }
                onBlur={handleBlur('phone')}
                value={values.phone}
                error={touched.phone ? errors.phone : ''}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="send"
                onSubmitEditing={handleSubmitFormik}
                editable={!loading}
                mask={'([00]) [00000]-[0000]'}
              />
            </Main>
            <Footer>
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
