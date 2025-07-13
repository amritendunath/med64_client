import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
  signInWithPhoneNumber,
  FacebookAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
  RecaptchaVerifier,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  createUserWithEmailAndPassword
} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq2xhMNK_SHEDqBOl5svdRL7RL84dOCOI",
  authDomain: "sathiaiagent.firebaseapp.com",
  projectId: "sathiaiagent",
  storageBucket: "sathiaiagent.firebasestorage.app",
  messagingSenderId: "821366951271",
  appId: "1:821366951271:web:66a52c470baa786819f3c2",
  measurementId: "G-1X4S58ES67"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const provider_google = new GoogleAuthProvider();
const provider_facebook = new FacebookAuthProvider();
const provider_twitter = new TwitterAuthProvider();
// signInWithRedirect(auth, provider_facebook)
// signInWithRedirect(auth, provider_google)

export {
  auth,
  provider_google,
  provider_facebook,
  provider_twitter,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithPopup,
  signInWithPhoneNumber,
  FacebookAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
  RecaptchaVerifier,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink
};
