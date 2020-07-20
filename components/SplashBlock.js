import EmailInput from "./EmailInput";
import SocialMedias from "./SocialMedias";

export default function SplashBlock() {
  return (
    <React.Fragment>
      <div className="splash-block">
        <h1 className="uoh-header">uOttaHack4</h1>
        <span className="uoh-text">
          With uOttaHack 3 wrapped up, it's about time to prepare for uOttaHack
          4. <br />
          Feel free to enter your email to receive updates from the team!
        </span>
        <EmailInput />
        <a
          href="mailto:sponsor@uottahack.ca"
          className="sponsor"
          title="Become a sponsor"
        >
          Interested in sponsoring?
        </a>
        <SocialMedias />
      </div>

      <style jsx>
        {`
          .splash-block {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
          }

          .uoh-header {
            font-size: 4.2rem;
            font-family: "Harabara";
            letter-spacing: 1.5px;
            margin: 0 0 12.5px 0;
            width: 100%;
            text-align: center;
          }

          .uoh-text {
            font-size: 1.3rem;
            font-family: "Gilroy-Medium";
            width: 100%;
            text-align: center;
          }

          .sponsor {
            margin-top: 50px;
            font-size: 1.25rem;
          }

          @media only screen and (max-width: 1000px) {
            .splash-block {
              margin-top: 0;
            }

            .uoh-text {
              font-size: 1rem;
            }

            .sponsor {
              margin-top: 25px;
              font-size: 1rem;
            }

            .uoh-header {
              font-size: 2.25rem;
              margin-top: 12.5px;
            }
          }
        `}
      </style>
    </React.Fragment>
  );
}
