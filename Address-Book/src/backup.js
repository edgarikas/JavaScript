let addressBook = [];
let newArray = JSON.parse(window.localStorage.getItem("contacts"));
if (Array.isArray(newArray)) {
  addressBook = newArray;
}

function render() {
  containerClass = "container";
  let getData = JSON.parse(window.localStorage.getItem("contacts"));
  if (document.querySelector(`.${containerClass}`)) {
    document.querySelector(`.${containerClass}`).remove();
  }
  containerClass = "container";
  const container = document.createElement("div");
  container.className = containerClass;
  document.querySelector("#app").append(container);
  const ul = document.createElement("ul");
  document.querySelector(".container").append(ul);
  if (getData) {
    getData.forEach((e, i) => {
      const li = document.createElement("li");
      const btnF = document.createElement("button");
      btnF.className = "favorite";
      const btnE = document.createElement("button");
      btnE.className = "edit";
      const btnD = document.createElement("button");
      btnD.className = "delete";
      btnD.id = i;
      li.textContent = e;
      li.append(btnF, btnE, btnD);
      document.querySelector("ul").append(li);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  render();
});
document.querySelector(".add").addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let phone = document.querySelector("#phone").value;
  let contact = name + " - " + phone;

  addressBook[addressBook.length] = contact;
  window.localStorage.setItem("contacts", JSON.stringify(addressBook));

  console.log(addressBook);

  render();
  document.querySelector("#name").value = "";
  document.querySelector("#phone").value = "";
});

document.querySelector("#app").addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.className === "delete") {
    let newArray = JSON.parse(window.localStorage.getItem("contacts"));
    newArray.splice(e.target.id, 1);
    addressBook = newArray;
    window.localStorage.setItem("contacts", JSON.stringify(newArray));
    render();
  } else if (e.target.className === "favorite") {
    e.target.id = "favContact";
    console.log(document.querySelector("li"));
    console.log(e.target.id);

    //document.querySelectorAll("li").forEach(e => {console.dir(e.lastChild.id)})
  }
});
