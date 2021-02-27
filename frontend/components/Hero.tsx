import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import * as color from '../theme/GlobalColor';
import {
  ButtonIcon,
  HeroBackground,
  HeroBGDiv,
  HeroButtonDiv,
  HeroLeftDiv,
  HeroSubtitle,
  HeroTitle,
} from './HeroS';
import { Button } from './parts/Button';

export const Hero: React.FC = () => {
  return (
    <>
      <HeroBGDiv>
        <HeroLeftDiv>
          <HeroTitle>
            Anime<span style={{ color: `${color.$red}` }}>Index</span>
          </HeroTitle>
          <HeroSubtitle>Save your favorite animes all in one spot</HeroSubtitle>
          <HeroButtonDiv>
            <Link href="#">
              <HeroButton>Create an Account</HeroButton>
            </Link>
            <Link href="#">
              <HeroButton>
                Create a List
                <ButtonIcon />
              </HeroButton>
            </Link>
          </HeroButtonDiv>
        </HeroLeftDiv>
        <HeroBackground />
      </HeroBGDiv>
    </>
  );
};

const HeroButton = styled(Button)`
  width: 17rem;
  user-select: none;

  &:not(:first-child) {
    margin-left: 3rem;
  }
`;
