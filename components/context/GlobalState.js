import React, { useState } from "react";
import Context from "./context";
import firebase, { firestore } from "firebase/app";
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
    if (typeof window !== "undefined") {
      firebase.analytics();
    }
  }
  const db = firebase.firestore();

  const registerEmail = async (email) => {
    const registerStatus = {
      msg: "",
      success: null,
    };

    try {
      await db
        .collection("emails")
        .doc(email)
        .set({ createdAt: firestore.FieldValue.serverTimestamp() });

      registerStatus.msg = "Thanks for staying in the loop!";
      registerStatus.success = true;
    } catch (error) {
      registerStatus.msg = "Email has already been registered.";
      registerStatus.success = false;
    }

    return registerStatus;
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
