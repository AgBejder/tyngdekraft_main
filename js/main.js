document
  .querySelector("#pige_hover")
  .addEventListener("click", updateInfboxPige);

function updateInfboxPige() {
  console.log("updateInfboxPige");
  document.querySelector("#efficiency").textContent =
    "Information omkring modeshows";
  document.querySelector("#requirement").textContent = "her er mere info";

  document.querySelector(".info-text .placeholder").textContent = "her er info";
  //   document.querySelector("#effeciency").innerHTML
  //  = "h2>Pige</h2<p>Info om pige</p><img src='billede.'web>";

  document.querySelector("#requirement").textContent =
    "<p>Her er noget mere vedrørende tyndekraft</p>";
}

document.querySelector("#hover_bag").addEventListener("click", updateInfboxBag);

function updateInfboxBag() {
  console.log("updateInfboxBag");
  document.querySelector("#efficiency").textContent =
    "Information omkring modeshows";
  document.querySelector("#requirement").textContent = "her er mere info";

  document.querySelector(".info-text .placeholder").textContent = "her er info";
  //   document.querySelector("#effeciency").innerHTML
  //  = "h2>Pige</h2<p>Info om pige</p><img src='billede.'web>";

  document.querySelector("#requirement").textContent =
    "<p>Her er noget mere vedrørende tyndekraft</p>";
}

document
  .querySelector("#gardin_hover")
  .addEventListener("click", updateInfboxGardin);

function updateInfboxGardin() {
  console.log("updateInfboxGardin");
  document.querySelector("#efficiency").textContent =
    "Information omkring modeshows";
  document.querySelector("#requirement").textContent = "her er mere info";

  document.querySelector(".info-text .placeholder").textContent = "her er info";
  //   document.querySelector("#effeciency").innerHTML
  //  = "h2>Pige</h2<p>Info om pige</p><img src='billede.'web>";

  document.querySelector("#requirement").textContent =
    "<p>Her er noget mere vedrørende tyndekraft</p>";
}
