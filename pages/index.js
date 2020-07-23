import Head from "next/head";
import TopBar from "../components/TopBar";
import SplashBlock from "../components/SplashBlock";
import GlobalState from "../components/context/GlobalState";

export default function Home() {
  return (
    <>
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
        </GlobalState>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            min-width: 260px;
            height: 100vh;
            overflow-x: hidden;
            overflow-y: auto;
            background-image: url("bg.svg");
            background-repeat: no-repeat;
            background-attachment: local;
            background-position: center bottom;
            background-size: 100vw auto;
          }

          main {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-bottom: 50px;
          }

          @media only screen and (max-width: 1000px) {
            main {
              padding: 0 25px 0 25px;
              width: calc(100% - 50px);
            }

            .container {
              background-position: right bottom
                min(
                  0px,
                  calc(
                    100vh - (var(--inferred-bg-height)) -
                      (
                        var(--top-bar-height) + var(--content-height) +
                          var(--height-offset)
                      )
                  )
                );
              background-size: auto
                max(
                  calc(
                    100vh -
                      (
                        var(--top-bar-height) + var(--content-height) +
                          var(--height-offset)
                      )
                  ),
                  calc(var(--inferred-bg-height))
                );
            }
          }

          @media only screen and (max-width: 600px) {
            --height-offset: 50px;
          }

          @media only screen and (max-width: 350px) {
            --height-offset: 75px;
          }

          @media only screen and (min-width: 1000px) and (max-height: 780px) {
            .container {
              background-position: center bottom min(0px, calc(100vh - 780px));
            }
          }
        `}
      </style>
      <style global jsx>
        {`
          :root {
            --top-bar-height: min(15vh, 125px);
            --content-height: 300px;
            --height-offset: 0px;
            --inferred-bg-height: 100vw / (1920 / 749);
          }

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
            transition: opacity 0.2s;
          }

          a:hover {
            opacity: 0.6;
          }
        `}
      </style>
    </>
  );
}
