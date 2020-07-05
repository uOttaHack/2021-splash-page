import Head from 'next/head';
import TopBar from './components/TopBar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>uOttaHack 4 - uOttaHack 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopBar />
      </main>

      <style jsx>
        {`
          
        `}
      </style>
      <style global jsx>
      {`
        body {
          margin: 0;
          box-sizing: border-box;
          font-family: 'Gilroy-Regular';
        }

        @font-face {
          font-family: 'Gilroy-Regular';
          src: url('/fonts/Gilroy-Regular.ttf'); 
        }

        @font-face {
          font-family: 'Gilroy-ExtraBold';
          src: url('/fonts/Gilroy-ExtraBold.ttf');
        }

        a {
          text-decoration: none;
          color: #1DA1F2;
          font-size: 1.1rem;
        }

        b {
          font-size: 1.1rem;
        }
      `}
      </style>
    </div>
  );
}
