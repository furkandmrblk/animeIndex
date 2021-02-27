import React from 'react';
import Link from 'next/link';
import { NavDiv, NavItem, NavItemDiv, NavLogo } from './NavbarS';
import * as color from '../theme/GlobalColor';
import { Button } from './parts/Button';

export const Navbar: React.FC = () => {
  return (
    <>
      <NavDiv>
        <Link href="/">
          <NavLogo>
            A<span style={{ color: `${color.$red}` }}>I</span>
          </NavLogo>
        </Link>
        <NavItemDiv>
          <Link href="#">
            <NavItem>Register</NavItem>
          </Link>
          <Link href="#">
            <Button>Login</Button>
          </Link>
        </NavItemDiv>
      </NavDiv>
    </>
  );
};
