const btn = document.querySelector("#btn");
const fist = document.querySelector("#1");
const second = document.querySelector("#2");
const show = document.querySelector("show");

function addNumber(a, b) {
  console.log(a + b);
  show.innerHTML = a + b;
}

btn.addEventListener("click", () => addNumber(fist.value, second.value));
