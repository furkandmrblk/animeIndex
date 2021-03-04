import styled from 'styled-components';
import * as typeface from '../theme/GlobalFont';
import * as color from '../theme/GlobalColor';
import { CardAnimation } from './animations/CardAnimation';
import { Button } from './parts/Button';

// Hero Containers
export const HeroLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin-left: 2.8125rem;
  margin-top: 8rem;
`;

export const HeroBGDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const HeroButtonDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const HeroCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:not(:first-child) {
    margin-left: 0.75rem;
  }

  &:not(:last-child) {
    margin-top: 17.65rem;
  }
`;

export const HeroCardWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-right: 2.8125rem;
`;

// Hero Background
export const HeroBackground = styled.div`
  z-index: -1;
  position: absolute;

  border-bottom: 100vh solid ${color.$black};
  border-left: 20rem solid transparent;

  width: 70vw;

  margin-top: -4.3rem;
  margin-left: 30vw;
`;

// Hero Title
export const HeroTitle = styled.h1`
  font-family: ${typeface.righteous};
  font-size: ${typeface.$lgfont};
  color: ${color.$black};

  margin-bottom: 1.5rem;
`;

// Hero Subtitle
export const HeroSubtitle = styled.h1`
  font-size: ${typeface.$mdfont};
  max-width: 39.3125rem;

  margin-bottom: 2.5rem;
`;

// Hero Button Icon
export const ButtonIcon = styled.div`
  background-image: url('plus.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 18px;
  width: 18px;

  margin-left: 1rem;
`;

// Hero Cards

export const HeroCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 8rem;
  width: 23rem;

  background-color: ${color.$lightred};

  border: none;
  border-radius: 10px;

  padding: 0 0.8rem;

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  animation: ${CardAnimation} 4s linear infinite;
`;

export const HeroCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const CardTitle = styled.h1`
  font-size: ${typeface.$herocardlg};
  margin-bottom: 0.4rem;

  user-select: none;
`;
export const CardDescription = styled.h1`
  font-size: ${typeface.$herocardsm};
  font-style: italic;
  text-align: justify;

  max-width: 11rem;
  margin-bottom: 0.4rem;

  user-select: none;
`;
export const CardStatus = styled.h1`
  font-size: ${typeface.$herocardmd};

  user-select: none;
`;

export const CardImage = styled.div`
  height: 6.5rem;
  width: 6.5rem;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border: none;
  border-radius: 10px;
`;

// Hero Buttons

export const HeroButton = styled(Button)`
  width: 17rem;
  user-select: none;

  font-size: ${typeface.$smfont};

  &:not(:first-child) {
    margin-left: 3rem;
  }
`;
