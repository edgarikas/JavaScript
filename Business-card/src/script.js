const result = document.querySelector(".result");
const btn = document.querySelector("btn");
const name = document.querySelector(".input--fullname");
const email = document.querySelector(".input--email");
const phone = document.querySelector(".input--phone");
const adress = document.querySelector(".input--adress");
const services = document.querySelector(".input--services");
const cardL = document.querySelector(".cardL");
const cardR = document.querySelector(".cardR");

const person = [name.value, email.value, phone.value, services.value];

let authToken;
let i = "";
function getUserInfo() {
  person.forEach((v) => {
    console.log(v);
  });
}

function clearData() {
  name.value = "";
  email.value = "";
  phone.value = "";
  adress.value = "";
  services.value = "";
}

document.addEventListener("click", (e) => {
  // console.dir(e.target.className);
  if (e.target.className === "btn") {
    getUserInfo();
    cardL.textContent = "";
    cardR.textContent = "";

    const img = document.createElement("img");
    i = img;
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfZS7sKX1MJ7WClhNt2EwP12GbFzpc-09wYP1_VPknMkG1v3JWS9o_WEBAlj0CrrqIy0&usqp=CAU";
    img.width = 100;
    img.style.marginTop = "1rem";
    cardL.append(img);
    i = img;

    localStorage.setItem("Name", JSON.stringify(name.value));
    console.log(window.localStorage.getItem("Name.value"));

    const nameTransfer = document.createElement("p");
    nameTransfer.textContent = name.value;

    const emailTransfer = document.createElement("p");
    emailTransfer.textContent = email.value;

    const phoneTransfer = document.createElement("p");
    phoneTransfer.textContent = phone.value;

    const adressTransfer = document.createElement("p");
    adressTransfer.textContent = adress.value;

    const servicesTransfer = document.createElement("p");
    servicesTransfer.textContent = services.value;

    cardL.append(nameTransfer, servicesTransfer);
    cardR.append(emailTransfer, phoneTransfer, adressTransfer);

    clearData();
  }
});

function add(tag, attributes) {
  const element = document.createElement(tag);

  attributes.forEach((p) => {
    element[p.name] = p.value;
  });
  return element;
}
