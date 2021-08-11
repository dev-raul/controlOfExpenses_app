import {Container} from '@components';
import React from 'react';
import {SignUpParamsParams} from '../../../@types';

import {Content, ScrollContent, Form, SubTitle, Header} from '../styles';
import {Emotion} from './styles';
export interface SignUpProps extends SignUpParamsParams {
  children: React.ReactNode;
}
export const SignUp = ({children, emotion, subTitle}: SignUpProps) => {
  return (
    <Container>
      <ScrollContent>
        <Content>
          <Form>
            <Header>
              {emotion && <Emotion>{emotion}</Emotion>}
              {subTitle && <SubTitle>{subTitle}</SubTitle>}
            </Header>
            {children}
          </Form>
        </Content>
      </ScrollContent>
    </Container>
  );
};
