document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});

const movie = document.querySelector(".movie");
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const setupUI = (user) => {
  if (user) {
    // toggle UI elements
    loggedOutLinks.forEach((item) => (item.style.display = "none"));
    loggedInLinks.forEach((item) => (item.style.display = "block"));
  } else {
    // toggle UI elements
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
    loggedInLinks.forEach((item) => (item.style.display = "none"));
  }
};

const movies = document.querySelector(".movies");
document.addEventListener("DOMContentLoaded", function () {
  // add Movies
  const forms = document.querySelectorAll(".side-form");
  M.Sidenav.init(forms, { edge: "left" });
});

// populate data
const setupMovies = (data) => {
  let html = "";
  data.forEach((doc) => {
    const movie = doc; // assigning doc to movie for clarity
    const li = `
      <div class="card-panel movie purple lighten-4 row" data-id="${doc.id}">
        <img src="./img/clapboard.png" class="responsive-img materialboxed" alt="">
        <div class="movie-detail">
          <div class="movie-title">${movie.title}</div>
          <div class="movie-synopsis">${movie.synopsis}</div>
        </div>
        <div class="movie-delete">
          <i class="material-icons" data-id="${doc.id}">delete_outline</i>
        </div>
      </div>`;
    html += li;
  });
  movies.innerHTML = html;
};

const renderMovie = (data, id) => {
  const html = `
  <div class="card-panel movie purple lighten-4 row" data-id ="${id}">
      <img src="./img/clapboard.png" class="responsive-img materialboxed" alt="">
      <div class="movie-detail">
          <div class="movie-title">${data.title}</div>
          <div class="movie-synopsis">${data.synopsis}</div>
      </div>
      <div class="movie-delete">
          <i class="material-icons" data-id ="${id}">delete_outline</i>
      </div>
  </div>`;
  movies.innerHTML += html;
};

// remove movie from DOM
const removeMovie = (id) => {
  const movie = document.querySelector(`.movie[data-id ='${id}']`);
  movie.remove();
};