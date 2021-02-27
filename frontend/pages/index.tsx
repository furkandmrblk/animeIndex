import Head from 'next/head';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';

export default function Home() {
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
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
