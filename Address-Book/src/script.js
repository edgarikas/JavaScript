const inputsContainer = document.createElement("div");

function render(data) {
  const inputsId = "inputs";
  inputsContainer.id = inputsId;

  for (i = 1; i <= window.localStorage.length; i++) {
    let inputsData = document.createElement("p");
    inputsData.textContent += data[i].name;
    inputsData.textContent += " - ";
    inputsData.textContent += data[i].email;
    inputsContainer.append(inputsData);
    document.querySelector("#app").append(inputsContainer);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (window.localStorage.getItem("1")) {
    let persistedData = [];

    for (i = 1; i <= window.localStorage.length; i++) {
      let array = JSON.parse(window.localStorage.getItem(i));
      persistedData[i] = array;
    }
    console.log("Persisted data = ", persistedData);
    render(persistedData);
  }
});

document
  .querySelector("#address-book-inputs")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    let q = window.localStorage.length;
    q += 1;
    const inputs = Object.fromEntries(new FormData(e.target));
    window.localStorage.setItem(q, JSON.stringify(inputs));

    const inputsId = "inputs";
    inputsContainer.id = inputsId;
    const inputsData = document.createElement("p");
    inputsData.textContent += document.querySelector("#name").value;
    inputsData.textContent += " - ";
    inputsData.textContent += document.querySelector("#email").value;

    inputsContainer.append(inputsData);
    document.querySelector("#app").append(inputsContainer);

    document.querySelectorAll(".data").forEach((input) => {
      input.value = "";
    });
  });

document.querySelector(".delete").addEventListener("click", (d) => {
  window.localStorage.removeItem(window.localStorage.length);
  location.reload();
});
