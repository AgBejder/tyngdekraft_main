document
  .querySelector("#pige_hover")
  .addEventListener("click", updateInfboxPige);

function updateInfboxPige() {
  console.log("updateInfboxPige");
  document.querySelector("#efficiency").textContent =
    "Når accessories går catwalken lodret op. Du sidder og nyder showet, modellerne strutter, musikken spiller – og pludselig letter din taske som om den selv har booket en runway. I modebranchen er man dog vant til, at drama skal opad, ikke nedad.";
  document.querySelector("#requirement").textContent = "her er mere info";

  document.querySelector(".info-text .placeholder").textContent = "Modeshows";
  //   document.querySelector("#effeciency").innerHTML
  //  = "h2>Pige</h2<p>Info om pige</p><img src='billede.'web>";

  document.querySelector("#requirement").textContent =
    "Hvad gør du? Bevar roen. Hvis du skriger, tror de, det er en ny slags publikumsinteraktion. Ræk armen elegant op som en diva, mens en stage manager forsøger at fange tasken med et sommerfuglenet. Brug efterfølgende episoden som networking: “Nå, det var min taske, der lavede stuntet – ja, jeg arbejder lidt kreativt med vægtløs estetik.”";
}

document.querySelector("#hover_bag").addEventListener("click", updateInfboxBag);

function updateInfboxBag() {
  console.log("updateInfboxBag");
  document.querySelector("#efficiency").textContent =
    "Når dine indkøb spontant går på loft-tur. Du er i gang med at købe mælk, brød og et par gode tilbud – og wups – dine varer stiger op mellem hylderne som om de leder efter en bedre pris et andet sted.";
  document.querySelector("#requirement").textContent = "Info";

  document.querySelector(".info-text .placeholder").textContent = "Butikken";
  //   document.querySelector("#effeciency").innerHTML
  //  = "h2>Pige</h2<p>Info om pige</p><img src='billede.'web>";

  document.querySelector("#requirement").textContent =
    "Hvad gør du? Følg dine varer med samme ro, som om du sammenligner priser. Find en medarbejder, der kender butikkens “anti-grav”-protokol (ofte en kosteskaft-operatør eller en meget høj trainee). Overvej at tage varerne som et tegn på, at du måske skulle købe noget lettere. Det er tydeligvis deres natur.";
}

document
  .querySelector("#gardin_hover")
  .addEventListener("click", updateInfboxGardin);

function updateInfboxGardin() {
  console.log("updateInfboxGardin");
  document.querySelector("#efficiency").textContent =
    "Når din jakke stiger mere i graderne end du gør. Det starter som en helt almindelig aften: du afleverer din jakke, får en nummerbrik – og fem minutter senere svæver jakken som en glad ballon op mod loftet. Paniken breder sig, men tag det roligt: garderobepersonalet er trænet i at håndtere både forsvundne tasker, stjålne huer og nu også antigravitations-relaterede tekstilforhøjninger.";
  document.querySelector("#requirement").textContent = "her er mere info";

  document.querySelector(".info-text .placeholder").textContent = "Gaderoben";
  //   document.querySelector("#effeciency").innerHTML
  //  = "h2>Pige</h2<p>Info om pige</p><img src='billede.'web>";

  document.querySelector("#requirement").textContent =
    "Hvad gør du? Peg mod loftet og sig roligt: “Den dér er min.” Vent tålmodigt mens en ansat finder den lange anti-gravitations-hov og ‘hiver’ den ned. Overvej at tjekke dine lommer næste gang – et tyggegummi kan åbenbart trigge fænomenet.";
}
