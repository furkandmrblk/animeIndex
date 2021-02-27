import styled from 'styled-components';
import * as typeface from '../theme/GlobalFont';
import * as color from '../theme/GlobalColor';

// Nav Containers
export const NavDiv = styled.div`
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

  margin-right: 5rem;

  user-select: none;
`;

// Nav Hamburgers
