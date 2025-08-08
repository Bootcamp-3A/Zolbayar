const body = document.querySelector("body");
const blue = document.createElement("div");
const red = document.createElement("div");
red.style.width = "50%";
blue.style.width = "50%";
red.classList.add("red");
blue.classList.add("blue");

document.addEventListener("keyup", () => {
  if (event.code === "Enter") {
    blue.style.width = parseInt(blue.style.width) + 1 + "%";
    red.style.width = parseInt(red.style.width) - 1 + "%";
  }
});
document.addEventListener("keydown", () => {
  if (event.code === "Space") {
    red.style.width = parseInt(red.style.width) + 1 + "%";
    blue.style.width = parseInt(blue.style.width) - 1 + "%";
  }
});
body.appendChild(red);
body.appendChild(blue);

const image = document.createElement("img");
image.src = "https://www.w3schools.com/js/pic_bulboff.gif";

const button = document.createElement("button");
let isOn = false;
button.innerText = "On";

document.addEventListener("keydown", () => {
  isOn = !isOn;

  if ((isOn, event.code === "Space")) {
    image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
  } else {
    event.code === "Space";
    image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
  }
});

body.appendChild(image);
