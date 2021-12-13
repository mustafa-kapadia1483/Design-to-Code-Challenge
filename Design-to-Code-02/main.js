const navLinks = document.querySelectorAll(".nav-link");
let currentSelectedNavLink = document.querySelector(".selected");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (navLink !== currentSelectedNavLink) {
      currentSelectedNavLink.classList.remove("selected");
      currentSelectedNavLink = navLink;
      navLink.classList.add("selected");
    }
  });
});
