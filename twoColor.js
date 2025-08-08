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
