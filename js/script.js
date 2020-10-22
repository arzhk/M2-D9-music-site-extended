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

function albumInfo() {
  const modalTitle = document.querySelector(".modal-title");
  const modalBody = document.querySelector(".modal-body");

  const parentCard = event.currentTarget.parentNode.querySelector("h5")
    .innerText;
  const parentImg = event.currentTarget.parentNode.parentNode.querySelector(
    "img"
  ).outerHTML;

  modalTitle.innerText = parentCard;
  modalBody.innerHTML = parentImg;

  const newul = document.createElement("ul");
  for (let i = 1; i < 13; i++) {
    const newli = document.createElement("li");
    newli.innerText = i + ". Track " + i;
    newul.appendChild(newli);
    modalBody.appendChild(newul);
  }
}
