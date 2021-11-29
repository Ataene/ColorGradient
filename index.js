let color1 = document.querySelector(".color1");

let color2 = document.querySelector(".color2");

let body = document.querySelector("#gradient");

let displayText = document.querySelector("h3");


color1.addEventListener("input", setGradinent);

color2.addEventListener("input", setGradinent);

function setGradinent(){

  body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value +")";

  displayText.textContent = body.style.background + ";";
}
