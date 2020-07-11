/* e.preventDefault();

        // get user info
        const email = form["signin-email"].value; */

import { useEffect } from "react";

export default function EmailInput() {
  useEffect(() => {
    const form = document.getElementById("emailForm");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailInput = document.getElementById("emailInput");
      const isValidEmail = emailInput.checkValidity();
      const email = form["email"].value;

      if (isValidEmail) {
        console.log(email.trim());
      } else {
        console.log("not valid");
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div className="email-input-container">
        <form id="emailForm">
          <i
            aria-hidden="true"
            className="fas fa-arrow-right submit-arrow"
            title="Register email"
          ></i>
          <input
            type="email"
            name="email"
            id="emailInput"
            placeholder="Enter in your email"
            required
          />
        </form>
      </div>

      <style jsx>
        {`
          .email-input-container {
            position: relative;
            margin-top: 50px;
          }

          .submit-arrow {
            position: absolute;
            right: 20px;
            font-size: 1.6rem;
            transform-origin: center;
            transform: translate(0, 13.5px);
            cursor: pointer;
            transition: transform 0.15s ease-out;
          }

          .submit-arrow:hover {
            transform: translate(3px, 13.5px);
          }

          #emailInput {
            width: 450px;
            height: 37.5px;
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

          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px white inset !important;
          }
        `}
      </style>
    </React.Fragment>
  );
}
