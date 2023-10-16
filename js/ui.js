document.addEventListener("DOMContentLoaded", function(){
    const forms = document.querySelectorAll(".side-form");
    M.Sidenav.init(forms, { edge:  "left" });
})