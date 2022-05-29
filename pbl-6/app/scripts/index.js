const desktopCarouselRows = document.querySelectorAll(
  ".carousel.desktop .carousel-item"
);
const desktopCardsPerRow = 5;

desktopCarouselRows.forEach((row) => {
  let nextRow = row.nextElementSibling;
  for (let cardIndex = 1; cardIndex < desktopCardsPerRow; cardIndex++) {
    if (!nextRow) nextRow = desktopCarouselRows[0]; // wrap carousel from end to beginning
    let nextRowClone = nextRow.cloneNode(true);
    let cardClass = getCardClass(cardIndex, "desktop");
    if (cardClass) nextRowClone.children[0]?.classList.add(cardClass);
    row.appendChild(nextRowClone.children[0]); // appends cloned next card image wrapper
    nextRow = nextRow.nextElementSibling;
  }
});

desktopCarouselRows.forEach((row) => {
  row.children[0].classList.add("most-outer-col"); // first card in row
});

const mobileCarouselRows = document.querySelectorAll(
  ".carousel.mobile .carousel-item"
);

const mobileCardsPerRow = 3;

mobileCarouselRows.forEach((row) => {
  let nextRow = row.nextElementSibling;
  for (let cardIndex = 1; cardIndex < mobileCardsPerRow; cardIndex++) {
    if (!nextRow) nextRow = mobileCarouselRows[0]; // wrap carousel from end to beginning
    let nextRowClone = nextRow.cloneNode(true);
    let cardClass = getCardClass(cardIndex, "mobile");
    if (cardClass) nextRowClone.children[0]?.classList.add(cardClass);
    row.appendChild(nextRowClone.children[0]); // appends cloned next card image wrapper
    nextRow = nextRow.nextElementSibling;
  }
});

mobileCarouselRows.forEach((row) => {
  row.children[0].classList.add("outer-col"); // first card in row
});

function getCardClass(index, device) {
  switch (index) {
    case 1:
      return device === "desktop" ? "outer-col" : "central-col";
    case 2:
      return device === "desktop" ? "central-col" : "outer-col";
    case 3:
      return "outer-col";
    case 4:
      return "most-outer-col";
  }
}

// Review ballon change
const users = [
  document.querySelector(".user-1"),
  document.querySelector(".user-2"),
  document.querySelector(".user-3"),
];

const review = document.querySelector(".desktop-review");
const triangle = document.querySelector(".triangle-left");

users.forEach((user, index) =>
  user.addEventListener("click", () => {
    review.src = `./img/reviews/user-${index + 1}-review.svg`;
    triangle.style.top = `${2 + 6.5 * index}rem`;
    users.forEach((user) => user.classList.add("opacity-50"));
    user.classList.remove("opacity-50");
    console.log(users);
  })
);
