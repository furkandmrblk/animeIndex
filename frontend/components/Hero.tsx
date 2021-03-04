import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import * as typeface from '../theme/GlobalFont';
import * as color from '../theme/GlobalColor';
import {
  ButtonIcon,
  CardDescription,
  CardImage,
  CardStatus,
  CardTitle,
  HeroBackground,
  HeroBGDiv,
  HeroButton,
  HeroButtonDiv,
  HeroCard,
  HeroCardDiv,
  HeroCardLeft,
  HeroCardWrapper,
  HeroLeftDiv,
  HeroSubtitle,
  HeroTitle,
} from './HeroS';

export const Hero: React.FC = () => {
  return (
    <>
      <HeroBGDiv>
        <HeroLeftDiv>
          <HeroTitle>
            Anime<span style={{ color: `${color.$red}` }}>Index</span>
          </HeroTitle>
          <HeroSubtitle>
            Create your favorite anime list and share it with your friends
          </HeroSubtitle>
          <HeroButtonDiv>
            <Link href="#">
              <HeroButton>
                Create an Account <ButtonIcon />
              </HeroButton>
            </Link>
            <Link href="#">
              <HeroButton>Top Anime List</HeroButton>
            </Link>
          </HeroButtonDiv>
        </HeroLeftDiv>
        <HeroCardWrapper>
          <HeroCardDiv>
            <HeroCard>
              <HeroCardLeft>
                <CardTitle>Jujutsu Kaisen</CardTitle>
                <CardDescription>
                  In a world where demons feed on unsuspecting humans, fragments
                  of the legendary and feared demon Ryoumen Sukuna were lost and
                  scattered about. ...
                </CardDescription>
                <CardStatus style={{ color: '#F2CB00' }}>Watching</CardStatus>
              </HeroCardLeft>
              <CardImage style={{ backgroundImage: `url('jjk.jpg')` }} />
            </HeroCard>
            <HeroCard>
              <HeroCardLeft>
                <CardTitle>Dr. Stone</CardTitle>
                <CardDescription>
                  In a world where demons feed on unsuspecting humans, fragments
                  of the legendary and feared demon Ryoumen Sukuna were lost and
                  scattered about. ...
                </CardDescription>
                <CardStatus style={{ color: '#00e1f1' }}>Finished</CardStatus>
              </HeroCardLeft>
              <CardImage style={{ backgroundImage: `url('drstone.jpg')` }} />
            </HeroCard>
            <HeroCard
              style={{
                background:
                  'linear-gradient(180deg, #BF2929 0%, rgba(191, 41, 41, 0) 100%)',
              }}
            >
              <HeroCardLeft>
                <CardTitle>Demon Slayer</CardTitle>
                <CardDescription
                  style={{
                    background:
                      'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.3) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  In a world where demons feed on unsuspecting humans, fragments
                  of the legendary and feared demon Ryoumen Sukuna were lost and
                  scattered about. ...
                </CardDescription>
                <CardStatus
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(166, 229, 218, 0.6) 0%, rgba(166, 229, 218, 0) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  On Watchlist
                </CardStatus>
              </HeroCardLeft>
              <CardImage
                style={{ backgroundImage: `url('demonslayer.jpg')` }}
              />
            </HeroCard>
          </HeroCardDiv>
          <HeroCardDiv>
            <HeroCard>
              <HeroCardLeft>
                <CardTitle>Jujutsu Kaisen</CardTitle>
                <CardDescription>
                  In a world where demons feed on unsuspecting humans, fragments
                  of the legendary and feared demon Ryoumen Sukuna were lost and
                  scattered about. ...
                </CardDescription>
                <CardStatus style={{ color: '#F2CB00' }}>Watching</CardStatus>
              </HeroCardLeft>
              <CardImage style={{ backgroundImage: `url('jjk.jpg')` }} />
            </HeroCard>
            <HeroCard>
              <HeroCardLeft>
                <CardTitle>Dr. Stone</CardTitle>
                <CardDescription>
                  In a world where demons feed on unsuspecting humans, fragments
                  of the legendary and feared demon Ryoumen Sukuna were lost and
                  scattered about. ...
                </CardDescription>
                <CardStatus style={{ color: '#00e1f1' }}>Finished</CardStatus>
              </HeroCardLeft>
              <CardImage style={{ backgroundImage: `url('drstone.jpg')` }} />
            </HeroCard>
            <HeroCard
              style={{
                background:
                  'linear-gradient(180deg, #BF2929 0%, rgba(191, 41, 41, 0) 100%)',
              }}
            >
              <HeroCardLeft>
                <CardTitle>Demon Slayer</CardTitle>
                <CardDescription
                  style={{
                    background:
                      'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.3) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  In a world where demons feed on unsuspecting humans, fragments
                  of the legendary and feared demon Ryoumen Sukuna were lost and
                  scattered about. ...
                </CardDescription>
                <CardStatus
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(166, 229, 218, 0.6) 0%, rgba(166, 229, 218, 0) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  On Watchlist
                </CardStatus>
              </HeroCardLeft>
              <CardImage
                style={{ backgroundImage: `url('demonslayer.jpg')` }}
              />
            </HeroCard>
          </HeroCardDiv>
        </HeroCardWrapper>
        <HeroBackground />
      </HeroBGDiv>
    </>
  );
};
