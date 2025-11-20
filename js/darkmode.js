// button
// Tilføj din JavaScript her
const root = document.querySelector("html");
const btn = document.querySelector("button#toggle");

function toogleDarkMode() {
  root.classList.toggle("dark");
}

btn.addEventListener("click", toogleDarkMode);
