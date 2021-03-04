import React, { useRef, useEffect } from 'react';
import { Elastic, gsap, Power3, TweenMax } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);
import {
  AboutDescription,
  AboutDiv,
  AboutLeft,
  AboutRight,
  AboutTitle,
  AboutInput,
  AboutInputDiv,
  AboutButton,
  AboutCard,
} from './AboutS';
import {
  CardDescription,
  CardImage,
  CardStatus,
  CardTitle,
  HeroCardLeft,
} from './HeroS';

export const About: React.FC = () => {
  let Card = useRef<HTMLDivElement | null>(null);
  let Card2 = useRef<HTMLDivElement | null>(null);
  let Card3 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    TweenMax.from(Card, 2.5, {
      opacity: 0,
      x: -350,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Card3.current,
      },
    });
    TweenMax.from(Card2, 2.5, {
      opacity: 0,
      x: -300,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Card3.current,
      },
    });
    TweenMax.from(Card3, 2.5, {
      opacity: 0,
      x: -250,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Card3.current,
      },
    });
  });

  return (
    <>
      <AboutDiv id="about">
        <AboutLeft>
          <AboutInputDiv>
            <AboutInput placeholder="Search" name="search" type="text" />
            <AboutButton>Add</AboutButton>
          </AboutInputDiv>
          <AboutCard ref={(el) => (Card = el)}>
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
          </AboutCard>
          <AboutCard ref={(el) => (Card2 = el)}>
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
          </AboutCard>
          <AboutCard
            ref={(el) => (Card3 = el)}
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
            <CardImage style={{ backgroundImage: `url('demonslayer.jpg')` }} />
          </AboutCard>
        </AboutLeft>
        <AboutRight>
          <AboutTitle>Create your custom anime list</AboutTitle>
          <AboutDescription>
            Search for your desired anime and simply click on add. <br /> Voilá,
            the anime is now in your list.
          </AboutDescription>
        </AboutRight>
      </AboutDiv>
    </>
  );
};
