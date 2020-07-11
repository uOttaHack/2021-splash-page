import Head from 'next/head';
import TopBar from './components/TopBar'
import SplashBlock from './components/SplashBlock'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>uOttaHack 4 - uOttaHack 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopBar />
        <SplashBlock />
        <img src="/bg.svg" alt="Background" className="bg"/>
      </main>

      <style jsx>
      {`
        .bg {
          position: absolute;
          bottom: -35px;
          left: 0;
          object-fit: cover;
          width: 100%;  
        } 
      `}
      </style>
      <style global jsx>
      {`
        body {
          margin: 0;
          box-sizing: border-box;
          font-family: 'Gilroy-Regular';
          overflow: hidden;
        }

        @font-face {
          font-family: 'Gilroy-Regular';
          src: url('/fonts/Gilroy-Regular.ttf'); 
        }

        @font-face {
          font-family: 'Gilroy-Bold';
          src: url('/fonts/Gilroy-Bold.ttf');
        }

        @font-face {
          font-family: 'Harabara';
          src: url('/fonts/Harabara.ttf');
        }

        a {
          text-decoration: none;
          color: #1DA1F2;
          font-size: 1.1rem;
        }

        b {
          font-family: 'Gilroy-Bold';
          font-size: 1.1rem;
        }

        h1 {
          font-size: 3.5rem;
          font-family: 'Harabara';
          letter-spacing: 1.5px;
        }
      `}
      </style>
    </div>
  );
}
