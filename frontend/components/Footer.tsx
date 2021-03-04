import React from 'react';
import Link from 'next/link';
import {
  FooterColumn,
  FooterCopyright,
  FooterCopyrightDiv,
  FooterDiv,
  FooterItem,
  FooterTitle,
} from './FooterS';

export const Footer: React.FC = () => {
  return (
    <>
      <FooterDiv>
        <FooterColumn>
          <FooterTitle>Navigation</FooterTitle>
          <Link href="/">
            <FooterItem>Home</FooterItem>
          </Link>
          <FooterItem>My List</FooterItem>
          <FooterItem>Top Anime List</FooterItem>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Socials</FooterTitle>
          <FooterItem>Instagram</FooterItem>
          <FooterItem>Twitter</FooterItem>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Legals</FooterTitle>
          <FooterItem>Imprint</FooterItem>
          <FooterItem>Privacy Policy</FooterItem>
        </FooterColumn>
      </FooterDiv>
      <FooterCopyrightDiv>
        <FooterCopyright>©Copyright 2021 | AnimeIndex.com</FooterCopyright>
      </FooterCopyrightDiv>
    </>
  );
};
