import {Button, Container} from '@components';
import {useRoute} from '@react-navigation/core';
import {Formik} from 'formik';
import React, {useCallback, useState} from 'react';
import {SignUpParamsParams} from '../../../@types';

import {
  Content,
  ScrollContent,
  Form,
  Main,
  Footer,
  SubTitle,
  Header,
} from '../styles';
import {Emotion} from './styles';
import {UserEmail} from './UserEmail';
import {UserName} from './UserName';
export const SignUp = () => {
  const routes = useRoute();

  const [loading, setLoading] = useState(false);

  const {
    initialValues,
    emotion,
    buttonText = 'Prosseguir',
    subTitle,
    handleSubmit,
    SingUpValidatorSchema,
    page,
  } = routes.params as SignUpParamsParams;

  const handleSubmitEvent = useCallback(
    (values: any) => {
      setLoading(true);
      setTimeout(() => {
        console.log('values', values);
        handleSubmit(values);
        setLoading(false);
      }, 5000);
    },
    [handleSubmit],
  );

  return (
    <Container>
      <ScrollContent>
        <Content>
          <Formik
            validationSchema={SingUpValidatorSchema}
            initialValues={initialValues}
            onSubmit={handleSubmitEvent}>
            {({
              handleSubmit: handleSubmitFormik,
              values,
              touched,
              errors,
              ...formilkPros
            }) => (
              <Form>
                <Header>
                  {emotion && <Emotion>{emotion}</Emotion>}
                  {subTitle && <SubTitle>{subTitle}</SubTitle>}
                </Header>
                <Main>
                  {page === 'username' && (
                    <UserName
                      loading={loading}
                      handleSubmit={handleSubmitFormik}
                      values={values}
                      touched={touched}
                      errors={errors}
                      {...formilkPros}
                    />
                  )}
                  {page === 'email' && (
                    <UserEmail
                      loading={loading}
                      handleSubmit={handleSubmitFormik}
                      values={values}
                      touched={touched}
                      errors={errors}
                      {...formilkPros}
                    />
                  )}
                </Main>
                <Footer>
                  <Button
                    loading={loading}
                    onPress={handleSubmitFormik}
                    text={buttonText}
                  />
                </Footer>
              </Form>
            )}
          </Formik>
        </Content>
      </ScrollContent>
    </Container>
  );
};
