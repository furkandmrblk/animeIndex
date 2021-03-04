import React from 'react';
import Link from 'next/link';
import {
  RegisterDiv,
  RegisterLeft,
  RegisterRight,
  RegisterTitle,
  SignIn,
} from './RegistrationS';
import * as color from '../theme/GlobalColor';
import { RegisterForm } from './parts/Form';

export const Registration: React.FC = () => {
  return (
    <>
      <RegisterDiv>
        <RegisterLeft>
          <RegisterTitle>Registration</RegisterTitle>
          <RegisterForm />
          <SignIn>
            Already have an account?{' '}
            <Link href="/login">
              <a style={{ cursor: 'pointer', color: `${color.$white}` }}>
                Sign In.
              </a>
            </Link>
          </SignIn>
        </RegisterLeft>
        <RegisterRight></RegisterRight>
      </RegisterDiv>
    </>
  );
};
