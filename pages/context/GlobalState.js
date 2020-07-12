import React, { useState } from "react";
import Context from "./context";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const Firebase = (props) => {
  // firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyB-X1biB2xjuzaCh_8hdtRn0G61Y8N6RVU",
    authDomain: "crayobois-fe722.firebaseapp.com",
    databaseURL: "https://crayobois-fe722.firebaseio.com",
    projectId: "crayobois-fe722",
    appId: "1:410478848299:web:b2f130cd32dba774fcbd6e",
    measurementId: "G-XHQN6JX1WG",
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

  const db = firebase.firestore();

  /* //fetching materials
  function getMats() {
    db.collection("shop")
      .doc("materialsList")
      .get()
      .then((doc) => {
        const data = doc.data();
        setMats([...data.materials]);
        setLoading(false);
      });
  } */

  return <Context.Provider value={{}}>{props.children}</Context.Provider>;
};

export default Firebase;
