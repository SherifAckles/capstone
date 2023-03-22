import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBi3OTlaW130MjQp6TN6uq_DkpmHXJVj_0",
  authDomain: "capstone-68a44.firebaseapp.com",
  projectId: "capstone-68a44",
  storageBucket: "capstone-68a44.appspot.com",
  messagingSenderId: "575102150816",
  appId: "1:575102150816:web:c7b2d2467aea0e7464c1c5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // always trigger google popup when use google auth provider for sign
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  
  if (!userAuth) return; // if userAuth is null, return nothing and stop the function from executing any further.
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user does not exist in db, create a new user

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return; // if email or password is empty, return nothing and stop the function from executing any further.
  return await createUserWithEmailAndPassword(auth, email, password);
  
};
