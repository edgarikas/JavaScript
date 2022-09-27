let newBoard = document.querySelector(".button");
let dragedItem = "0";

function addBoard() {
  const boards = document.querySelector(".boards");
  const board = document.createElement("div");
  board.classList = "boards__item";

  const cHeader = document.createElement("div");
  cHeader.classList = "card-header";
  const span = document.createElement("span");
  span.contentEditable = "true";
  span.classList = "title";
  span.textContent = "Card Name";
  const del = document.createElement("div");
  del.textContent = "X";
  del.classList = "delete";
  cHeader.append(span, del);

  const li = document.createElement("div");
  li.classList = "list";
  const liItem = document.createElement("div");
  liItem.draggable = "true";
  liItem.id = "start";
  liItem.classList = "list__item";
  liItem.textContent = "";

  const f = document.createElement("div");
  f.classList = "form";
  const textA = document.createElement("textarea");
  textA.classList = "textarea";
  textA.placeholder = "Enter Card Name";
  textA.textContent = "";
  const buttons = document.createElement("div");
  buttons.classList = "buttons";

  const add = document.createElement("button");
  add.classList = "add__item-btn";
  add.textContent = "Add Card";
  const cancel = document.createElement("button");
  cancel.classList = "cancel__item-btn";
  cancel.textContent = "Cancel";

  const addCard = document.createElement("button");
  addCard.classList = "add__btn";
  addCard.textContent = "+ Add Card";

  buttons.append(add, cancel);
  f.append(textA, buttons);

  board.append(cHeader, li, f, addCard);
  boards.append(board);

  //
  let value = "";
  addCard.addEventListener("click", (event) => {
    event.target.style.display = " none";
    f.style.display = " block";
    add.style.display = "none";
    textA.addEventListener("input", (e) => {
      value = e.target.value;
      if (value) {
        add.style.display = "block";
      } else {
        add.style.display = "none";
      }
    });
  });

  cancel.addEventListener("click", () => {
    clearData(addCard, f, textA);
  });

  add.addEventListener("click", (e) => {
    let list = li;
    const newItem = document.createElement("div");
    newItem.classList = "list__item";
    newItem.id = value;
    newItem.draggable = "true";
    //newItem.textContent = value;

    const p = document.createElement("p");
    p.textContent = value;
    const delB = document.createElement("button");
    delB.textContent = "X";
    delB.classList = "list__delete";

    newItem.append(p, delB);

    newItem.addEventListener("mouseover", () => {
      dragAndDrop();
    });
    list.append(newItem);
    clearData(addCard, f, textA);
  });

  //

  changeTilte();
  dragAndDrop();
  removeCard();
}

function clearData(addCard, f, textA) {
  addCard.style.display = "block";
  f.style.display = "none";
  textA.value = "";
  value = "";
}

function changeTilte() {
  const titles = document.querySelectorAll(".title");
  titles.forEach((title) => {
    title.addEventListener("click", (e) => (e.target.textContent = ""));
  });
}

function removeCard() {
  const remove = document.querySelectorAll(".delete");
  remove.forEach((r) => {
    r.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
    });
  });
}

function dragAndDrop() {
  const lists = document.querySelectorAll(".list");
  const listItems = document.querySelectorAll(".list__item");
  let certainPoint = "";

  for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];

    item.addEventListener("dragstart", () => {
      dragedItem = item;

      setTimeout(() => {
        item.style.display = " none";
      }, 0);
    });

    item.addEventListener("dragend", (e) => {
      setTimeout(() => {
        item.style.display = "flex";
        dragedItem = null;
      }, 0);
    });

    item.addEventListener("click", (e) => {
      //remove
      if (e.target.className === "list__delete") {
        item.remove();
      }
    });

    for (let j = 0; j < lists.length; j++) {
      const list = lists[j];
      list.addEventListener("dragover", (e) => {
        e.preventDefault();
        certainPoint = e.target.id;
      });
      list.addEventListener("dragenter", function (e) {
        e.preventDefault();
        let target = document.getElementById(certainPoint);
        this.style.backgroundColor = "rgba(0,0,0, .3)";
      });
      list.addEventListener("dragleave", function (e) {
        e.preventDefault();
        this.style.backgroundColor = "rgba(0,0,0, 0)";
      });
      list.addEventListener("drop", function (e) {
        this.style.backgroundColor = "rgba(0,0,0, 0)";

        this.append(dragedItem);
        let target = document.getElementById(certainPoint);

        if (target === null) {
          this.append(dragedItem);
        } else {
          target.after(dragedItem);
        }
      });
    }
  }
}

newBoard.addEventListener("click", addBoard);

window.addEventListener("DOMContentLoaded", () => {
  dragAndDrop();
});
