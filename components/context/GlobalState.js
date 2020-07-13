import React, { useState } from "react";
import Context from "./context";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const GlobalState = (props) => {
  // firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyDqP81M_NzZFT7i8GCaGoYkVXpezNre1pY",
    authDomain: "uottahack-2021.firebaseapp.com",
    databaseURL: "https://uottahack-2021.firebaseio.com",
    projectId: "uottahack-2021",
    appId: "1:710922476292:web:a4db01b29d8d57964dce51",
    measurementId: "G-Y8Z7Z5FGMZ",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  const db = firebase.firestore();

  const checkIfEmailExists = async (email) => {
    return new Promise((resolve) => {
      try {
        db.collection("contact")
          .doc("emails_list")
          .get()
          .then((doc) => {
            const data = doc.data();
            const emails = data.emails;
            emails.forEach((elem) => {
              if (elem === email) {
                resolve(true);
              }
            });
            resolve(false);
          });
      } catch {
        resolve(null);
      }
    });
  };

  const registerEmail = async (email) => {
    const emailAlreadyExists = await checkIfEmailExists(email);
    let registerStatus = {
      msg: "",
      success: null,
    };

    if (emailAlreadyExists === null) {
      registerStatus.msg = "An unexpected error occured. Please try again.";
      registerStatus.success = false;
      return registerStatus;
    }

    if (!emailAlreadyExists) {
      try {
        db.collection("contact")
          .doc("emails_list")
          .update({
            emails: firebase.firestore.FieldValue.arrayUnion(email),
          });
        registerStatus.msg = "Thanks for staying in the loop!";
        registerStatus.success = true;
        return registerStatus;
      } catch {
        registerStatus.msg = "An unexpected error occured. Please try again.";
        registerStatus.success = false;
        return registerStatus;
      }
    } else {
      registerStatus.msg = "Email has already been registered.";
      registerStatus.success = false;
      return registerStatus;
    }
  };

  return (
    <Context.Provider
      value={{
        registerEmail: registerEmail,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
