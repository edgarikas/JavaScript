let sum = document.querySelector("#sum");
let minus = document.querySelector("#minus");
let div = document.querySelector("#div");
let multiple = document.querySelector("#mul");
let mod = document.querySelector("#mod");
let clear = document.querySelector("#clear");
let result = document.querySelector(".result");
let inputs = document.querySelectorAll("input");
let nr1 = document.querySelector(".input1");
let nr2 = document.querySelector(".input2");
// Functions
function suma(nr11, nr21) {
    const r = parseInt(nr11) + parseInt(nr21);
    return r;
}
function minusF(nr12, nr22) {
    const r = parseInt(nr12) - parseInt(nr22);
    return r;
}
function divide(nr13, nr23) {
    const r = parseInt(nr13) / parseInt(nr23);
    return r;
}
function mul(nr14, nr24) {
    const r = parseInt(nr14) * parseInt(nr24);
    return r;
}
function modul(nr15, nr25) {
    const r = parseInt(nr15) % parseInt(nr25);
    return r;
}
//Events
/*
sum.addEventListener("click", (e) => {
  console.log(nr1.value);
  result.textContent = suma(nr1.value, nr2.value);
});

minus.addEventListener("click", (e) => {
  result.textContent = minusF(nr1.value, nr2.value);
});

div.addEventListener("click", (e) => {
  result.textContent = divide(nr1.value, nr2.value);
});

multiple.addEventListener("click", (e) => {
  result.textContent = mul(nr1.value, nr2.value);
});

mod.addEventListener("click", (e) => {
  result.textContent = modul(nr1.value, nr2.value);
});

clear.addEventListener("click", (e) => {
  inputs.forEach((input) => (input.value = ""));
  result.textContent = "";
});
*/ //Switch
document.addEventListener("click", (e)=>{
    switch(e.target.innerText){
        case "+":
            sum.addEventListener("click", (e)=>{
                console.log(nr1.value);
                result.textContent = suma(nr1.value, nr2.value);
            });
            break;
        case "-":
            minus.addEventListener("click", (e)=>{
                result.textContent = minusF(nr1.value, nr2.value);
            });
            break;
        case "/":
            div.addEventListener("click", (e)=>{
                result.textContent = divide(nr1.value, nr2.value);
            });
            break;
        case "*":
            multiple.addEventListener("click", (e)=>{
                result.textContent = mul(nr1.value, nr2.value);
            });
            break;
        case "%":
            mod.addEventListener("click", (e)=>{
                result.textContent = modul(nr1.value, nr2.value);
            });
            break;
        case "C":
            clear.addEventListener("click", (e)=>{
                inputs.forEach((input)=>input.value = "");
                result.textContent = "";
            });
            break;
    }
});

//# sourceMappingURL=index.579125c3.js.map
