import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB-jW7s8YiV1vmb9afOX0873GnPcAHbPUQ",
    authDomain: "sofka-okr.firebaseapp.com",
    projectId: "sofka-okr",
    storageBucket: "sofka-okr.appspot.com",
    messagingSenderId: "1065298756677",
    appId: "1:1065298756677:web:847258434448b49e13cf2c",
    measurementId: "G-623XNRQKMW"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
export const firestore = firebase.firestore;