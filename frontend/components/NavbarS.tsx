import styled from 'styled-components';
import * as typeface from '../theme/GlobalFont';
import * as color from '../theme/GlobalColor';

// Nav Containers
export const NavDiv = styled.div`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 2.8125rem;
`;

export const NavItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Nav Logo
export const NavLogo = styled.a`
  z-index: 100;
  font-family: ${typeface.righteous};
  font-size: ${typeface.$mdfont};
  color: ${color.$black};
  text-decoration: none;
  cursor: pointer;

  user-select: none;
`;

// Nav Items
export const NavItem = styled.a`
  font-size: ${typeface.$smfont};
  color: ${color.$white};
  text-decoration: none;
  cursor: pointer;

  margin-right: 4rem;

  user-select: none;

  transition: all 200ms ease-in-out;

  &:hover {
    color: ${color.$gray};
  }
`;

// Nav Hamburgers
