import styled, { keyframes } from 'styled-components';
import * as typeface from '../theme/GlobalFont';
import * as color from '../theme/GlobalColor';

// Footer Container
export const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${color.$black};
`;
export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &:not(:first-child, :nth-child(2)) {
    margin-right: 25rem;
  }

  &:not(:last-child, :nth-child(2)) {
    margin-left: 25rem;
  }

  margin-top: 20rem;
  margin-bottom: 4rem;
`;

export const FooterCopyrightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.$black};

  margin: 0 auto;
`;

// Footer Item
export const FooterTitle = styled.h1`
  font-size: ${typeface.$smfont};
  color: ${color.$white};
  text-align: left;

  margin-bottom: 2rem;
`;

export const FooterItem = styled.a`
  font-size: ${typeface.$paragraph};
  color: ${color.$white};
  text-align: left;

  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  transition: all 200ms ease-in-out;

  &:hover {
    color: ${color.$gray};
  }
`;

// Footer Logo

// Footer Copyright
export const FooterCopyright = styled.h1`
  font-size: ${typeface.$paragraph};
  font-weight: ${typeface.$light};
  color: ${color.$gray};
  text-align: center;

  margin-bottom: 0.5rem;
`;
