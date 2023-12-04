import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  enableIndexedDbPersistence
} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
import { 
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyCjLtV7oESaAFUg4o-mcHWlj9I-GUapu_M",
            authDomain: "movielog-d5a7d.firebaseapp.com",
            projectId: "movielog-d5a7d",
            storageBucket: "movielog-d5a7d.appspot.com",
            messagingSenderId: "37578670623",
            appId: "1:37578670623:web:e0f691e57106ef97f8cb2a",
            measurementId: "G-QWQQXEVX94"
        };

// Initialize Firebase
/*const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function getMovies(db) {
  const moviesCol = collection(db, "movielog");
  const movieSnapshot = await getDocs(moviesCol);
  const movieList = movieSnapshot.docs.map((doc) => doc);
  return movieList;
}

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code == "failed-precondition") {
    // Multiple tabs open, persistence can only be enabled in one tab at a time.
    console.log("Persistence failed");
  } else if (err.code == "unimplemented") {
    // The current browser does not support all of the features required to enable persistence.
    console.log("Persistence is not valid");
  }
});

onSnapshot(collection(db, "movielog"), (doc) => {
  //   console.log(doc.docChanges());
  doc.docChanges().forEach((change) => {
    // console.log(change, change.doc.data(), change.doc.id);
    if (change.type === "added") {
      //Call render function in UI
      renderMovie(change.doc.data(), change.doc.id);
    }
    if (change.type === "removed") {
      //do something
      removeMovie(change.doc.id);
    }
  });
});

//add new movie
/*const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  addDoc(collection(db, "movielog"), {
    title: form.title.value,
    synopsis: form.synopsis.value,
  }).catch((error) => console.log(error));
  form.title.value = "";
  form.synopsis.value = "";
});


//delete movie
const movieContainer = document.querySelector(".movies");
movieContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "I") {
    const id = event.target.getAttribute("data-id");
    deleteDoc(doc(db, "movielog", id));
  }
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User log in: ", user.email);
    getMovies(db).then((snapshot) => {
    setupMovies(snapshot);
    });
    setupUI(user);
    const form = document.querySelector("form");
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      addDoc(collection(db, "movielog"), {
        title: form.title.value,
        synopsis: form.synopsis.value,
      }).catch((error) => console.log(error));
      form.title.value = "";
      form.synopsis.value = "";
    });
  } else {
    setupUI();
    setupMovies([]);
  }

  // Auth state changes

onAuthStateChanged(auth, (user) => {

  if (user) {

    // User is signed in, call getMovies

    console.log("User log in: ", user.email);

    getMovies().then((movieList) => {

      setupMovies(movieList); // Ensure this function renders the movies to the UI

    });

    setupUI(user); // Setup UI for logged in user

    const form = document.querySelector("form");

    form.addEventListener('submit', (event) => {

      event.preventDefault();

      addDoc(collection(db, "movielog"), {

        title: form.title.value,

        synopsis: form.synopsis.value,

      }).then(() => {

        // Handle what happens after a successful addition

        console.log('Movie added!');

      }).catch((error) => console.log(error));

      form.title.value = "";

      form.synopsis.value = "";

    });

  } else {

    // User is signed out, clear the movies

    console.log("User is not logged in.");

    setupUI(); // Adjust UI for logged out state

    setupMovies([]); // Clear the movies from the UI

  }
});*/


// Initialize Firebase


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

 

// Function to get movies (should only be called when user is authenticated)

async function getMovies() {

  const moviesCol = collection(db, "movielog");

  const movieSnapshot = await getDocs(moviesCol);

  const movieList = movieSnapshot.docs.map((doc) => doc.data()); // Assuming you want the data, not the doc itself

  return movieList;

}

 

// Enable offline data persistence

enableIndexedDbPersistence(db).catch((err) => {

  if (err.code == "failed-precondition") {

    console.log("Persistence failed. Only one tab can be active at a time.");

  } else if (err.code == "unimplemented") {

    console.log("The current browser does not support all of the features required to enable persistence");

  }

});

 

// Auth state changes

onAuthStateChanged(auth, (user) => {

  if (user) {

    // User is signed in, call getMovies

    console.log("User log in: ", user.email);

    getMovies().then((movieList) => {

    setupMovies(movieList); // Ensure this function renders the movies to the UI

    });

    setupUI(user); // Setup UI for logged in user

    const form = document.querySelector("form");

    form.addEventListener('submit', (event) => {

      event.preventDefault();

      addDoc(collection(db, "movielog"), {

        title: form.title.value,

        synopsis: form.synopsis.value,

      }).then(() => {

        // Handle what happens after a successful addition

        console.log('Movie added!');

      }).catch((error) => console.log(error));

      form.title.value = "";

      form.synopsis.value = "";

    });

  } else {

    // User is signed out, clear the movies

    console.log("User is not logged in.");

    setupUI(); // Adjust UI for logged out state

    setupMovies([]); // Clear the movies from the UI

  }

});