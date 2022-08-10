const btn = document.querySelector("btn");
const cardL = document.querySelector(".cardL");
const cardR = document.querySelector(".cardR");
let inputs = document.querySelectorAll("input");
const name = document.querySelector(".input--fullname");
const email = document.querySelector(".input--email");
const phone = document.querySelector(".input--phone");
const adress = document.querySelector(".input--adress");
const services = document.querySelector(".input--services");
const clearCart = document.querySelector(".btn--result");

let data = [JSON.parse(window.localStorage.getItem("BusinessCart"))];
let r = [];
let transferData = "";
let cycle = 0;

let check = false;

let getI;

function generateCart() {
  cycle = 0;
  inputs.forEach((e) => {
    data[cycle] = e.value;
    if (cycle === 0 || cycle === 4) {
      transferData = document.createElement("p");
      transferData.textContent = e.value;
      cardL.append(transferData);
    } else if (cycle >= 2 || cycle == 1) {
      transferData = document.createElement("p");
      transferData.textContent = e.value;
      cardR.append(transferData);
    }
    cycle += 1;
  });

  window.localStorage.setItem("BusinessCart", JSON.stringify(data));
  // console.log("data = ", data);
}

function generateImage() {
  let img = document.createElement("img");
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfZS7sKX1MJ7WClhNt2EwP12GbFzpc-09wYP1_VPknMkG1v3JWS9o_WEBAlj0CrrqIy0&usqp=CAU";
  img.width = 100;
  img.style.marginTop = "1rem";
  cardL.append(img);
}

function getDataFromStorage() {
  cardL.textContent = "";
  cardR.textContent = "";

  getI = JSON.parse(window.localStorage.getItem("BusinessCart"));
  console.log("getI =  ", getI);
  if (getI) {
    generateImage();
  }
  for (let i = 0; i < 5; i++) {
    r[i] = "";
  }
  if (getI) {
    for (let i = 0; i < 5; i++) {
      r[i] = getI[i];
    }
  }

  name.value = r[0];
  email.value = r[1];
  phone.value = r[2];
  adress.value = r[3];
  services.value = r[4];

  const nameTransfer = document.createElement("p");
  nameTransfer.textContent = name.value;
  const servicesTransfer = document.createElement("p");
  servicesTransfer.textContent = services.value;

  const emailTransfer = document.createElement("p");
  emailTransfer.textContent = email.value;
  const adressTransfer = document.createElement("p");
  adressTransfer.textContent = adress.value;
  const phoneTransfer = document.createElement("p");
  phoneTransfer.textContent = phone.value;

  cardL.append(nameTransfer, servicesTransfer);
  cardR.append(emailTransfer, phoneTransfer, adressTransfer);

  //Generate cart
}

getDataFromStorage();

document.addEventListener("click", (e) => {
  if (e.target.className == "btn btn--submit") {
    cardL.textContent = "";
    cardR.textContent = "";
    generateCart();
    getDataFromStorage();
    getI = JSON.parse(
      window.localStorage.getItem("BusinessCart", JSON.stringify("asas"))
    );
  } else if (e.target.className === "btn btn--result") {
    cardR.textContent = "";
    cardL.textContent = "";
  } else if (e.target.className === "btn btn--clear") {
    window.localStorage.clear();
    cardR.textContent = "";
    cardL.textContent = "";
    inputs.forEach((e) => {
      e.value = "";
    });
  }
});
