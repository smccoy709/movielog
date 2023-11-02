const movies = document.querySelector(".movies");

document.addEventListener("DOMContentLoaded", function () {
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