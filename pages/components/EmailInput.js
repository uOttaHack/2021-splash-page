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
            margin-top: 50px;
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
