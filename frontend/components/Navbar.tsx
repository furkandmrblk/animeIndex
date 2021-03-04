import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { NavDiv, NavItem, NavItemDiv, NavLogo } from './NavbarS';
import * as color from '../theme/GlobalColor';
import { Button } from './parts/Button';

export const Navbar: React.FC = () => {
  useEffect(() => {
    const register = 'http://localhost:3000/register';
    const login = 'http://localhost:3000/login';

    if (window.location.href === register) {
      document.getElementById('logo').style.color = '#FBFAFA';
      document.body.style.backgroundColor = '#BF2929';
    } else if (window.location.href === login) {
      document.getElementById('logo').style.color = '#FBFAFA';
      document.body.style.backgroundColor = '#BF2929';
    } else {
      document.getElementById('logo').style.color = '#DC0C0C';
      document.body.style.backgroundColor = '#FBFAFA';
    }
  });

  return (
    <>
      <NavDiv>
        <Link href="/">
          <NavLogo>
            A
            <span id="logo" style={{ color: `${color.$red}` }}>
              I
            </span>
          </NavLogo>
        </Link>
        <NavItemDiv>
          <Link href="/#about">
            <NavItem>How It Works</NavItem>
          </Link>
          <Link href="/register">
            <NavItem>Register</NavItem>
          </Link>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </NavItemDiv>
      </NavDiv>
    </>
  );
};
