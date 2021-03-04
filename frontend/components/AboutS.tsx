import styled, { keyframes } from 'styled-components';
import * as typeface from '../theme/GlobalFont';
import * as color from '../theme/GlobalColor';
import { Input } from './parts/Input';
import { Button } from './parts/Button';
import { HeroCard } from './HeroS';

// About Container
export const AboutDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  background-color: ${color.$black};
  width: 100vw;
  margin-top: 11rem;
`;

export const AboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 1rem;

  background: linear-gradient(
    180deg,
    ${color.$verylightred} 0%,
    rgba(215, 59, 59, 0.2) 100%
  );
  border-radius: 10px;

  height: 32rem;
  width: 25rem;

  margin-top: 20rem;
  margin-left: 25rem;
`;

export const AboutRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-top: 20rem;
  margin-right: 25rem;
`;

// Input Field & Button
export const AboutInputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4rem;
  width: 23rem;

  background-color: ${color.$lightred};
  border-radius: 10px;

  margin-bottom: 2rem;
`;

export const AboutInput = styled(Input)`
  height: 2.5rem;
  width: 16.5rem;

  margin-bottom: 0;

  &::-webkit-input-placeholder {
    font-size: ${typeface.$paragraph};
    font-style: italic;
  }
`;

export const AboutButton = styled(Button)`
  height: 2.5rem;
  width: 4rem;

  font-size: ${typeface.$paragraph};
  font-weight: ${typeface.$light};

  background-color: ${color.$black};
  border-radius: 5px;

  &:hover {
    background-color: ${color.$black};
  }

  margin-left: 0.8rem;
`;

// Cards
export const AboutCard = styled(HeroCard)`
  animation: none;
`;

// Title
export const AboutTitle = styled.h1`
  font-size: ${typeface.$mdfont};
  color: ${color.$white};
  text-align: left;

  max-width: 25rem;
  margin-bottom: 5rem;
`;

// Description
export const AboutDescription = styled.h1`
  font-size: ${typeface.$smfont};
  font-weight: ${typeface.$light};
  color: ${color.$white};
  text-align: justify;

  max-width: 21rem;
`;
