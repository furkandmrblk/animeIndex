import React from 'react';
import {
  LoginDiv,
  LoginLeft,
  LoginRight,
  LoginTitle,
  LoginButton,
} from './LoginS';
import { LoginForm } from './parts/Form';

export const Login: React.FC = () => {
  return (
    <>
      <LoginDiv>
        <LoginLeft>
          <LoginTitle>Login</LoginTitle>
          <LoginForm />
        </LoginLeft>
        <LoginRight></LoginRight>
      </LoginDiv>
    </>
  );
};
