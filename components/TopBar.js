export default function TopBar() {
  return (
    <div className="container">
      <div className="topBar">
        <img src="/logo.svg" alt="uOttaHack 4 logo" className="logo" />
        <div className="questions">
          <span>Questions?</span>
          <a href="mailto:hello@uottahack.ca" title="Contact us">
            hello@uottahack.ca
          </a>
        </div>
      </div>

      <style jsx>
        {`
          .topBar {
            width: calc(100% - 16em);
            height: 125px;
            padding: 0 8em 0 8em;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .logo {
            width: 75px;
            height: 75px;
            pointer-events: none;
            user-select: none;
          }

          .questions {
            display: block;
          }

          .questions > span {
            margin-right: 12px;
            font: bold 1.3rem "Gilroy-Medium", sans-serif;
          }

          @media only screen and (max-width: 1000px) {
            .topBar {
              margin-top: var(--top-bar-height);
              justify-content: center;
              width: 100%;
              height: 60px;
              padding: 0;
            }

            .logo {
              width: 60px;
              height: 60px;
            }

            .questions {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
}
