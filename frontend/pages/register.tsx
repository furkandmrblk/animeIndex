import React, { useEffect } from 'react';
import Head from 'next/head';
import { Registration } from '../components/Registration';
import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();

  // useEffect(() => {
  //   if ((document.cookie = 'token') === null) {
  //     console.log('User not logged in');
  //   } else {
  //     router.push('/');
  //   }
  // });

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
      <div>
        <Registration />
      </div>
    </>
  );
}
