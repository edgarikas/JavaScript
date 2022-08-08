const result = document.querySelector(".result");
const btn = document.querySelector("btn");
const name = document.querySelector(".input--fullname");
const email = document.querySelector(".input--email");
const phone = document.querySelector(".input--phone");
const services = document.querySelector(".input--services");
const card = document.querySelector(".card");

const person = [name.value, email.value, phone.value, services.value];

let authToken;
let i = "";
function getUserInfo() {
  person.forEach((v) => {
    console.log(v);
  });
}

document.addEventListener("click", (e) => {
  // console.dir(e.target.className);
  if (e.target.className === "btn") {
    getUserInfo();

    const img = document.createElement("img");
    i = img;
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfZS7sKX1MJ7WClhNt2EwP12GbFzpc-09wYP1_VPknMkG1v3JWS9o_WEBAlj0CrrqIy0&usqp=CAU";
    img.width = 100;
    img.style.marginTop = "1rem";
    card.append(img);
    i = img;

    console.dir(email.value);
    localStorage.setItem("Name1", JSON.stringify(name.value));

    const nameTransfer = document.createElement("p");
    nameTransfer.textContent = name.value;

    const emailTransfer = document.createElement("p");
    emailTransfer.textContent = email.value;

    const phoneTransfer = document.createElement("p");
    phoneTransfer.textContent = phone.value;

    const servicesTransfer = document.createElement("p");
    servicesTransfer.textContent = services.value;

    card.append(nameTransfer, servicesTransfer, phoneTransfer, emailTransfer);

    nameTransfer.style.color = "red";
    name.value = "";
    email.value = "";
    phone.value = "";
    services.value = "";
  }
});

function add(tag, attributes) {
  const element = document.createElement(tag);

  attributes.forEach((p) => {
    element[p.name] = p.value;
  });
  return element;
}
