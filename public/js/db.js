import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  enableIndexedDbPersistence,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjLtV7oESaAFUg4o-mcHWlj9I-GUapu_M",
  authDomain: "movielog-d5a7d.firebaseapp.com",
  projectId: "movielog-d5a7d",
  storageBucket: "movielog-d5a7d.appspot.com",
  messagingSenderId: "37578670623",
  appId: "1:37578670623:web:e0f691e57106ef97f8cb2a",
  measurementId: "G-QWQQXEVX94",
};

// initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// enable offline data persistence
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code == "failed-precondition") {
    console.log("Persistence failed. Only one tab can be active at a time.");
  } else if (err.code == "unimplemented") {
    console.log(
      "The current browser does not support all of the features required to enable persistence"
    );
  }
});

onSnapshot(collection(db, "movielog"), (doc) => {
  // console.log(doc.docChanges());
  doc.docChanges().forEach((change) => {
    // console.log(change, change.doc.data(), change.doc.id);
    if (change.type === "added") {
      // call render function in UI
      renderMovie(change.doc.data(), change.doc.id);
    }

    if (change.type === "removed") {
      removeMovie(change.doc.id);
    }
  });
});

// function to get movies for the specific logged in user
async function getMovies(userId) {
  const moviesCol = collection(db, "movielog");
  const q = query(moviesCol, where("userId", "==", userId)); // adjust this line to match your user identifier field
  const movieSnapshot = await getDocs(q);
  const movieList = movieSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return movieList;
}

// delete movie
const movieContainer = document.querySelector(".movies");

movieContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "I") {
    const id = event.target.getAttribute("data-id");
    deleteDoc(doc(db, "movielog", id));
  }
});

// auth state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User log in: ", user.email);
    getMovies(user.uid).then((movieList) => {
      // fetch movies for this specific user
      setupMovies(movieList);
    });
    setupUI(user); // setup UI for logged in user
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      addDoc(collection(db, "movielog"), {
        userId: user.uid, // add this line to associate the movie with the user
        title: form.title.value,
        synopsis: form.synopsis.value,
      }).then(() => {
          console.log("Movie added!");
        }).catch((error) => console.log(error));
          form.title.value = "";
          form.synopsis.value = "";
    });
  } else {
    console.log("User is not logged in.");
    setupUI(); // adjust UI for logged out state
    setupMovies([]); // clear the movies from the UI
  }
});