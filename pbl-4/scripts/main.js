// Collapse questions
const questionCards = document.getElementsByClassName("question-card");
function rotateCardArrow(card, deg) {
  card.getElementsByClassName(
    "arrow-icon"
  )[0].style.transform = `rotate(${deg}deg)`;
}
function isCardCollapsed(card) {
  return Boolean(
    card.getElementsByClassName("answer")[0].getAttribute("style")
  );
}

Object.values(questionCards).forEach((card) => {
  card.onclick = () => {
    const deg = isCardCollapsed(card) ? 180 : 0;
    rotateCardArrow(card, deg);
  };
});

// Modal popup
const registerButtons = document.getElementsByClassName("button");
const registerModal = new bootstrap.Modal("#modal");

Object.values(registerButtons).forEach((button) => {
  button.onclick = () => registerModal.toggle();
});
