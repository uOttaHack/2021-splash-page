export default function TopBar() {
  return (
    <div className="container">
      <div className="topbar">
        <img src="/logo.svg" alt="uOttaHack 4 logo" className="logo" />
        <div className="questions">
          <span
            style={{
              marginRight: 12 + "px",
              fontFamily: "Gilroy-Medium",
              fontSize: 1.3 + "rem",
            }}
          >
            Questions?
          </span>
          <a href="mailto:hello@uottahack.ca" title="Contact us">
            hello@uottahack.ca
          </a>
        </div>
      </div>

      <style jsx>
        {`
          .topbar {
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
          }

          .questions {
            display: block;
          }

          @media only screen and (max-width: 1000px) {
            .topbar {
              margin-top: 50px;
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
