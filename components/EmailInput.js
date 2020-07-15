import FontAwesome from "react-fontawesome";
import { useEffect, useState } from "react";
import Context from "./context/context";
import { useContext } from "react";

export default function EmailInput() {
  const context = useContext(Context);
  const [message, setMessage] = useState(null);
  const [success, setSuccess] = useState(null);
  const [lastRequest, setLastRequest] = useState(null);

  useEffect(() => {
    const form = document.getElementById("emailForm");
    form.addEventListener("submit", () => submit(event, form));

    return form.removeEventListener("submit", () => submit(event, form));
  }, []);

  const submit = async (event, form) => {
    event.preventDefault();

    if (
      lastRequest === null ||
      (new Date().getTime() - lastRequest.getTime()) / 1000 > 5
    ) {
      const emailInput = document.getElementById("emailInput");
      const isValidEmail = emailInput.checkValidity();
      const email = form["email"].value.trim();

      if (isValidEmail) {
        const registerStatus = await context.registerEmail(email);
        setLastRequest(new Date());
        setMessage(registerStatus.msg);
        setSuccess(registerStatus.success);
      } else {
        setMessage("Please enter a valid email.");
        setSuccess(false);
      }

      emailInput.value = "";
    }
  };

  return (
    <React.Fragment>
      <div className="email-input-container">
        <form id="emailForm">
          <span className="submit-arrow">
            <FontAwesome name="arrow-right" />
          </span>
          <button name="submit-btn" type="submit" className="submit-button" />
          <input
            type="email"
            name="email"
            id="emailInput"
            placeholder="Enter in your email"
            required
          />
        </form>
        {message ? (
          <span className={success ? "feedback green" : "feedback red"}>
            {message}
          </span>
        ) : null}
      </div>

      <style jsx>
        {`
          .email-input-container {
            position: relative;
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          #emailForm {
            position: relative;
          }

          .submit-arrow {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: 20px;
            font-size: 1.5rem;
            transform-origin: center;
            transform: translate(0, 13.5px);
            cursor: pointer;
            height: 25px;
            width: 25px;
            z-index: 2;
            pointer-events: none;
          }

          .submit-button {
            position: absolute;
            right: 20px;
            cursor: pointer;
            transform-origin: center;
            transform: translate(0, 13.5px);
            height: 25px;
            width: 25px;
            padding: 0;
            margin: 0;
            opacity: 0;
            z-index: 1;
          }

          #emailInput {
            width: 450px;
            height: 37.5px;
            margin: 0 !important;
            border-radius: 30px;
            outline: none;
            padding: 6.25px 25px 6.25px 25px;
            font-size: 1.3rem;
            font-family: "Gilroy-Regular";
            border: 2px solid black;
            -webkit-filter: none;
            -webkit-text-fill-color: black;
            filter: none;
          }

          .feedback {
            font-size: 1.25rem;
            margin-top: 6.25px;
          }

          .red {
            color: #c23434;
          }

          .green {
            color: #34c26e;
          }

          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px white inset !important;
          }

          @media only screen and (max-width: 1000px) {
            #emailInput {
              width: calc(100% - 29px);
              height: 25px;
              padding: 6.25px 12.5px 6.25px 12.5px;
              font-size: 1rem;
            }

            .email-input-container {
              margin-top: 25px;
              width: 100%;
            }

            .submit-arrow {
              right: 12.5px;
              font-size: 1.2rem;
              transform-origin: center;
              transform: translate(0, 8px);
              cursor: pointer;
            }

            .submit-button {
              position: absolute;
              right: 12.5px;
              cursor: pointer;
              transform-origin: center;
              transform: translate(0, 8px);
            }
          }
        `}
      </style>
    </React.Fragment>
  );
}
