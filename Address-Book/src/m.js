function render() {
  const inputsId = "inputs";
  const inputsContainer = document.createElement("div");
  const heading = document.createElement("h2");
  heading.textContent = "Address Book";
  const ul = document.createElement("ul");

  inputsContainer.append(heading);

  inputsContainer.id = inputsId;
  if (document.querySelector(`#${inputsId}`)) {
    document.querySelector(`#${inputsId}`).remove();
  }

  for (i = 1; i <= window.localStorage.length; i++) {
    let array = JSON.parse(window.localStorage.getItem(i));

    let li = document.createElement("li");
    li.textContent += array.name;
    li.textContent += " - ";
    li.textContent += array.email;
    ul.append(li);
  }
  inputsContainer.append(ul);
  document.querySelector("#app").append(inputsContainer);
}

window.addEventListener("DOMContentLoaded", () => {
  render();
});

document
  .querySelector("#address-book-inputs")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    let q = window.localStorage.length;
    const inputs = Object.fromEntries(new FormData(e.target));
    window.localStorage.setItem(q + 1, JSON.stringify(inputs));
    //Clear Inputs Field
    document.querySelectorAll(".data").forEach((input) => {
      input.value = "";
    });
    render();
  });

//Delete Entry
document.querySelector(".delete").addEventListener("click", (d) => {
  window.localStorage.removeItem(window.localStorage.length);
  location.reload();
});
