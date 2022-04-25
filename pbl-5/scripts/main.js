const playButton = document.getElementById("play-button");
const video = document.getElementById("video");
const thumbnail = document.getElementById("thumbnail");

const videoDisplayable = [playButton, video, thumbnail];

playButton.onclick = () => {
  videoDisplayable.forEach((el) => {
    el.classList.toggle("d-none");
  });
  video.attributes.src.value += "?autoplay=1";
};
