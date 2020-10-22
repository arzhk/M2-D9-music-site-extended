let activeLink = "";

function navActive() {
  const navli = document.querySelectorAll(".nav-item");
  const navLinks = document.querySelectorAll(".nav-item a");
  navli.forEach((e) => e.classList.remove("active"));
  navLinks.forEach((e) => e.classList.remove("active"));
  event.target.classList.add("active");
  activeLink = event.target.innerText;
  breadCrumb();
}

function breadCrumb() {
  const currentBreadcrumb = document.querySelector(
    ".breadcrumb-content-container .active"
  );

  currentBreadcrumb.innerHTML = `<a href=#${activeLink} class="white-txt">${activeLink
    .split(" ")
    .join("")}</a>`;
}
