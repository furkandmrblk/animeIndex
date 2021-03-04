import React, { useEffect } from 'react';
import Head from 'next/head';
import { Login } from '../components/Login';
import { useRouter } from 'next/router';
import cookie from 'cookie';

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {});

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Login />
    </>
  );
}
