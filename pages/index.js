import Head from "next/head";
import TopBar from "./components/TopBar";
import SplashBlock from "./components/SplashBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>uOttaHack 4 - uOttaHack 2021</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/be738c2079.js"
          crossOrigin="anonymous" 
        ></script>
      </Head>

      <TopBar />

      <main>
        <SplashBlock />
      </main>
      <img src="/bg.svg" alt="Background" className="bg" />

      <style jsx>
        {`
          .bg {
            position: absolute;
            bottom: -35px;
            left: 0;
            object-fit: cover;
            width: 100%;
            z-index: -10;
            pointer-events: none;
          }

          main {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
        `}
      </style>
      <style global jsx>
        {`
          body {
            margin: 0;
            box-sizing: border-box;
            font-family: "Gilroy-Regular";
            overflow: hidden;
          }

          @font-face {
            font-family: "Gilroy-Regular";
            src: url("/fonts/Gilroy-Regular.ttf");
          }

          @font-face {
            font-family: "Gilroy-Medium";
            src: url("/fonts/Gilroy-Medium.ttf");
          }

          @font-face {
            font-family: "Gilroy-Bold";
            src: url("/fonts/Gilroy-Bold.ttf");
          }

          @font-face {
            font-family: "Harabara";
            src: url("/fonts/Harabara.ttf");
          }

          a {
            text-decoration: none;
            color: #1da1f2;
            font-family: "Gilroy-Regular";
            font-size: 1.3rem;
          }
        `}
      </style>
    </div>
  );
}
