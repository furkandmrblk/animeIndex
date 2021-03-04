import styled from 'styled-components';
import * as typeface from '../theme/GlobalFont';
import * as color from '../theme/GlobalColor';
import { Button } from './parts/Button';

// Registration Containers
export const RegisterDiv = styled.div`
  position: relative;
  display: flex;
`;

export const RegisterLeft = styled.div`
  height: 100vh;
  width: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-top: -4.3rem;

  padding-left: 2.8125rem;
`;

export const RegisterRight = styled.div`
  z-index: -1;
  position: absolute;

  border-bottom: 100vh solid ${color.$black};
  border-left: 20rem solid transparent;

  width: 70vw;

  margin-top: -4.3rem;
  margin-left: 30vw;
`;

// Register Title
export const RegisterTitle = styled.h1`
  font-size: ${typeface.$mdfont};
  color: ${color.$white};
  text-align: left;

  user-select: none;

  margin-bottom: 3.2rem;
`;

// Register Button

export const RegisterButton = styled(Button)`
  width: 25.3125rem;
  background-color: ${color.$black};
  color: ${color.$white};

  &:hover {
    background-color: ${color.$black};
  }

  margin-bottom: 1rem;
`;

// Already have an account?
export const SignIn = styled.h1`
  font-size: ${typeface.$paragraph};
  font-weight: ${typeface.$light};
  text-align: left;

  color: ${color.$white};
`;
