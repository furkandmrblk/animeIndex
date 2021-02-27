import styled from 'styled-components';
import * as typeface from '../theme/GlobalFont';
import * as color from '../theme/GlobalColor';

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
  display: flex;
  justify-content: space-between;
`;

export const HeroButtonDiv = styled.div`
  display: flex;
  align-items: center;
`;

// Hero Background
export const HeroBackground = styled.div`
  z-index: -1;

  border-bottom: 100vh solid ${color.$black};
  border-left: 20rem solid transparent;

  width: 70vw;

  margin-top: -4.3rem;
`;

// Hero Title
export const HeroTitle = styled.h1`
  font-family: ${typeface.righteous};
  font-size: ${typeface.$lgfont};
  color: ${color.$black};

  user-select: none;

  margin-bottom: 1.5rem;
`;

// Hero Subtitle
export const HeroSubtitle = styled.h1`
  font-size: ${typeface.$mdfont};
  max-width: 39.3125rem;

  user-select: none;

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
