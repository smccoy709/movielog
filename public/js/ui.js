// setup materialize components
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
    //toggle UI elements
    loggedInLinks.forEach((item) => (item.style.display = "block"));
    loggedOutLinks.forEach((item) => (item.style.display = "none"));
  } else {
    //toggle UI elements
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
  }
};

const movies = document.querySelector(".movies");

document.addEventListener("DOMContentLoaded", function () {
  //Nav Menu
  const menus = document.querySelectorAll(".side-menu");
  M.Sidenav.init(menus, { edge: "right" });
  // Add Movies
  const forms = document.querySelectorAll(".side-form");
  M.Sidenav.init(forms, { edge: "left" });
});

const renderMovie = (data, id) => {
  const html = `
  <div class="card-panel movie purple lighten-4 row" data-id ="${id}">
            <img src="/public/img/clapboard.png" class="responsive-img materialboxed" alt="">
            <div class="movie-detail">
                <div class="movie-title">${data.title}</div>
                <div class="movie-synopsis">${data.synopsis}</div>
            </div>
            <div class="movie-delete">
                <i class="material-icons" data-id ="${id}">delete_outline</i>
            </div>
        </div>
  `;

  movies.innerHTML += html;
};

//remove movie from DOM
const removeMovie = (id) => {
  const movie = document.querySelector(`.movie[data-id =${id}]`);
  movie.remove();
};

//document.addEventListener("DOMContentLoaded", function(){
//    const forms = document.querySelectorAll(".side-form");
//    M.Sidenav.init(forms, { edge:  "left" });
//})