document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navbarList = document.querySelector(".navbar-list");

    hamburger.addEventListener("click", function () {
      navbarList.classList.toggle("show");
    });
  
    navbarList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navbarList.classList.remove("show");
      });
    });

    document.addEventListener("click", function (event) {
      if (!navbarList.contains(event.target) && !hamburger.contains(event.target)) {
        navbarList.classList.remove("show");
      }
    });
    
    hamburger.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });