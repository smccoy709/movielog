import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCjLtV7oESaAFUg4o-mcHWlj9I-GUapu_M",
    authDomain: "movielog-d5a7d.firebaseapp.com",
    projectId: "movielog-d5a7d",
    storageBucket: "movielog-d5a7d.appspot.com",
    messagingSenderId: "37578670623",
    appId: "1:37578670623:web:e0f691e57106ef97f8cb2a",
    measurementId: "G-QWQQXEVX94"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// signup
const signupForm = document.querySelector("#signup-form");
  signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // signed in
      const user = userCredential.user;
      console.log(user);
      const modal = document.querySelector("#modal-signup");
      M.Modal.getInstance(modal).close();
      signupForm.reset();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

// logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  signOut(auth)
    .then(() => {
      console.log("User has signed out");
    })
    .catch((error) => {
      console.log(error);
    });
});

// login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // signed in
      const user = userCredential.user;
      console.log(user);
      // close the login modal and reset the form
      const modal = document.querySelector("#modal-login");
      M.Modal.getInstance(modal).close();
      loginForm.reset();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});