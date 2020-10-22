const albumDB = [
  {
    albumName: "Album 1",
    tracklist: [
      "Center",
      "Suspicion",
      "Accept",
      "Salvation",
      "Regular",
      "Border",
      "Distortion",
      "Gradual",
      "Anticipation",
      "Personal",
      "Credibility",
      "Pioneer",
    ],
  },
  {
    albumName: "Album 2",
    tracklist: [
      "Operational",
      "Position",
      "Governor",
      "Opposition",
      "Include",
      "Precede",
      "Obscure",
      "Professor",
      "Difference",
      "Construct",
    ],
  },
  {
    albumName: "Album 3",
    tracklist: [
      "Traditional",
      "Disastrous",
      "Automatic",
      "Gratis",
      "Literate",
      "Superficial",
      "Curious",
      "Miscreant",
    ],
  },
  {
    albumName: "Album 4",
    tracklist: [
      "Polite",
      "Careless",
      "Serious",
      "Deserted",
      "Changeable",
      "Purple",
      "Spurious",
      "Spooky",
      "Squeamish",
      "Selective",
    ],
  },
  {
    albumName: "Album 5",
    tracklist: [
      "Center",
      "Suspicion",
      "Accept",
      "Salvation",
      "Regular",
      "Border",
      "Distortion",
      "Pioneer",
    ],
  },
  {
    albumName: "Album 6",
    tracklist: [
      "Operational",
      "Position",
      "Governor",
      "Opposition",
      "Professor",
      "Difference",
      "Construct",
    ],
  },
  {
    albumName: "Album 7",
    tracklist: [
      "Traditional",
      "Disastrous",
      "Automatic",
      "Gratis",
      "Literate",
      "Superficial",
      "Strong",
      "Squeamish",
      "Miscreant",
    ],
  },
  {
    albumName: "Album 8",
    tracklist: [
      "Polite",
      "Careless",
      "Inquisitive",
      "Historical",
      "Serious",
      "Deserted",
      "Changeable",
    ],
  },
  {
    albumName: "Album 9",
    tracklist: [
      "Center",
      "Suspicion",
      "Distortion",
      "Gradual",
      "Anticipation",
      "Personal",
      "Credibility",
      "Pioneer",
    ],
  },
  {
    albumName: "Album 10",
    tracklist: [
      "Operational",
      "Position",
      "Deteriorate",
      "Formation",
      "Difference",
      "Construct",
    ],
  },
  {
    albumName: "Album 11",
    tracklist: [
      "Traditional",
      "Automatic",
      "Gratis",
      "Superficial",
      "Curious",
      "Ambitious",
      "Capricious",
      "Squeamish",
    ],
  },
  {
    albumName: "Album 12",
    tracklist: [
      "Careless",
      "Historical",
      "Serious",
      "Deserted",
      "Changeable",
      "Purple",
      "Spurious",
      "Squeamish",
      "Selective",
    ],
  },
];

let activeLink = "";
let allAlbums;
let selectedAlbum;

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

function generateTableHead() {
  const modalBody = document.querySelector(".modal-body");
  const albumTable = document.createElement("table");
  albumTable.classList.add("table", "table-dark");
  const albumTableHead = document.createElement("thead");
  const albumTableR = document.createElement("tr");

  albumTableR.innerHTML =
    `<th scope="col">#</th>` +
    `<th scope="col">Track Title</th>` +
    `<th scope="col" class="text-right">Track Length</th>`;

  albumTableHead.appendChild(albumTableR);
  albumTable.appendChild(albumTableHead);
  modalBody.appendChild(albumTable);
}

function generateTableBody() {
  const albumTable = document.querySelector("table");
  const albumTableB = document.createElement("tbody");

  for (let i = 1, j = 0; i < albumDB[selectedAlbum].tracklist.length + 1; i++) {
    const albumTableNewRow = document.createElement("tr");
    let randomTimeA = Math.floor(Math.random() * 4) + 1;
    let randomTimeB = Math.floor(Math.random() * 60);
    let randomTimeC = Math.floor(Math.random() * 60);
    if (randomTimeB < 10) {
      randomTimeB = "0" + randomTimeB;
    }
    if (randomTimeC < 10) {
      randomTimeC = "0" + randomTimeC;
    }
    let randomTime = "0" + randomTimeA + ":" + randomTimeB + ":" + randomTimeC;

    albumTableNewRow.innerHTML +=
      `<th scope="row">${i}</th>` +
      `<td>${albumDB[selectedAlbum].tracklist[i - 1]}</td>` +
      `<td class="text-right">${randomTime}</td>`;
    albumTableB.appendChild(albumTableNewRow);
    albumTable.appendChild(albumTableB);
  }
}

function albumInfo() {
  const modalTitle = document.querySelector(".modal-title");
  const modalBody = document.querySelector(".modal-body");
  allAlbums = document.querySelectorAll(".card");

  const parentCard = event.currentTarget.parentNode.querySelector("h5")
    .innerText;
  const parentImg = event.currentTarget.parentNode.parentNode.querySelector(
    "img"
  ).outerHTML;

  allAlbums.forEach((e) => {
    e.classList.remove("selected-album");
  });
  event.currentTarget.parentNode.parentNode.classList.add("selected-album");
  for (let i = 0; i < allAlbums.length; i++) {
    if (allAlbums[i].classList.contains("selected-album")) {
      selectedAlbum = i;
    }
  }

  modalTitle.innerText = parentCard;
  modalBody.innerHTML = parentImg;

  generateTableHead();
  generateTableBody();
}
