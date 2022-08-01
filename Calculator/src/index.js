let sum = document.querySelector("#sum");
let minus = document.querySelector("#minus");
let div = document.querySelector("#div");
let multiple = document.querySelector("#mul");
let mod = document.querySelector("#mod");
let result = document.querySelector(".result");

let nr1 = document.querySelector(".input1");
let nr2 = document.querySelector(".input2");

let buttons = document.querySelector(".buttons");

nr1.addEventListener("click", (e) => {
  console.log(nr1.value);
});

// Functions

function suma(nr1, nr2) {
  const r = parseInt(nr1) + parseInt(nr2);
  return r;
}

function minusF(nr1, nr2) {
  const r = parseInt(nr1) - parseInt(nr2);
  return r;
}

function divide(nr1, nr2) {
  const r = parseInt(nr1) / parseInt(nr2);
  return r;
}

function mul(nr1, nr2) {
  const r = parseInt(nr1) * parseInt(nr2);
  return r;
}

function modul(nr1, nr2) {
  const r = parseInt(nr1) % parseInt(nr2);
  return r;
}

//Events

sum.addEventListener("click", (e) => {
  result.textContent = suma(nr1.value, nr2.value);
  console.log("plius");
});

minus.addEventListener("click", (e) => {
  result.textContent = minusF(nr1.value, nr2.value);
  console.log("Minus");
});

div.addEventListener("click", (e) => {
  result.textContent = divide(nr1.value, nr2.value);
  console.log("dalyba");
});

multiple.addEventListener("click", (e) => {
  result.textContent = mul(nr1.value, nr2.value);
  console.log("Kart");
});

mod.addEventListener("click", (e) => {
  result.textContent = modul(nr1.value, nr2.value);
  console.log("Modulis");
});
