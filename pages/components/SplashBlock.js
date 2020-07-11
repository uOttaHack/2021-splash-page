import EmailInput from "./EmailInput";

export default function SplashBlock() {
  return (
    <React.Fragment>
      <div className="splash-block">
        <h1 className="uoh-header">uOttaHack4</h1>
        <span className="uoh-text">
          With uOttaHack 3 wrapped up, it's about time to prepare for uOttaHack
          4. <br />
          Feel free to enter your email to recieve updates from the team!
        </span>
        <EmailInput />
        <a href="mailto:sponsor@uottahack.ca" style={{ marginTop: 50 + "px" }}>
          Interested in sponsoring?
        </a>
      </div>

      <style jsx>
        {`
          .splash-block {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: red;
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
        `}
      </style>
    </React.Fragment>
  );
}
