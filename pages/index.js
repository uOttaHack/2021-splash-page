import Head from "next/head";
import TopBar from "../components/TopBar";
import SplashBlock from "../components/SplashBlock";
import GlobalState from "../components/context/GlobalState";

export default function Home() {
  return (
    <div className="container">
      <GlobalState>
        <Head>
          <title>uOttaHack 4 - uOttaHack 2021</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
        </Head>

        <TopBar />

        <main>
          <SplashBlock />
        </main>
        <div className="bg-container">
          <img src="/bg.svg" alt="Background" className="bg" />
        </div>

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

            .container {
              width: 100%;
              height: 100vh;
              overflow: hidden;
            }

            main {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 100%;
            }

            @media only screen and (max-width: 1000px) {
              main {
                padding: 0 25px 0 25px;
                width: calc(100% - 50px);
              }

              .bg {
                width: 200%;
                left: -100%;
                bottom: -50px;
              }

              .bg-container {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
              }
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
      </GlobalState>
    </div>
  );
}
