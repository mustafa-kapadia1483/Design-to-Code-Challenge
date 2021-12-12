const navLinks = document.querySelectorAll(".nav-link");
let currentSelectedNavLink = document.querySelector(".selected");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (navLink !== currentSelectedNavLink) {
      currentSelectedNavLink.classList.remove("selected");
      currentSelectedNavLink = navLink;
      navLink.classList.add("selected");
      removeOutline(navLink);
      console.log(navLink.innerHTML);
    }
  });
});

function removeOutline(navLink) {
  const icon = navLink.querySelector("icn-icon");
  const nameValue = icon.getAttribute("name");
  icon.setAttribute("name", nameValue.replace("-outline", ""));
  console.log(icon.getAttribute("name"));
}
