const list = document.querySelectorAll(".list");
const btn = document.querySelector(".add__btn");
const addBtn = document.querySelector(".add__item-btn");
const cancelBtn = document.querySelector(".cancel__item-btn");
const textarea = document.querySelector(".textarea");
const form = document.querySelector(".form");
let newBoard = document.querySelector(".button");
let dragedItem = null;

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

  const f = document.createElement("div");
  f.classList = "form";
  const textA = document.createElement("textarea");
  textA.classList = "textarea";
  textA.placeholder = "Enter Card Name";
  const buttons = document.createElement("div");
  buttons.classList = "buttons";

  const add = document.createElement("button");
  add.classList = "add__item-btn";
  add.textContent = "Add Card";
  const cancel = document.createElement("button");
  cancel.classList = "cancel-btn";
  cancel.textContent = "Cancel";

  buttons.append(add.cancel);

  f.append(textA, buttons);

  board.append(cHeader, li, f);

  boards.append(board);

  changeTilte();
  dragAndDrop();
  removeCard();
}

function addTask() {
  let value;
  btn.addEventListener("click", () => {
    form.style.display = "block";
    btn.style.display = "none";
    addBtn.style.display = "none";
    textarea.addEventListener("input", (e) => {
      value = e.target.value;

      if (value) {
        addBtn.style.display = "block";
      } else {
        addBtn.style.display = "none";
      }
    });
  });

  cancelBtn.addEventListener("click", () => {
    clearData();
  });

  addBtn.addEventListener("click", () => {
    const newItem = document.createElement("div");
    newItem.classList = "list__item";
    newItem.draggable = "true";
    newItem.textContent = value;
    list[0].append(newItem);

    clearData();
    dragAndDrop();
  });
}

function clearData() {
  textarea.value = "";
  value = "";
  form.style.display = "none";
  btn.style.display = "flex";
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

  for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];

    item.addEventListener(
      "dragstart",
      () => {
        dragedItem = item;

        setTimeout(() => (item.style.display = " none"));
      },
      0
    );

    item.addEventListener("dragend", () => {
      setTimeout(() => {
        item.style.display = "block";
        dragedItem = null;
      }, 0);
    });

    item.addEventListener("dblclick", () => {
      item.remove();
    });

    for (let j = 0; j < lists.length; j++) {
      const list = lists[j];
      list.addEventListener("dragover", (e) => e.preventDefault());
      list.addEventListener("dragenter", function (e) {
        e.preventDefault();
        this.style.backgroundColor = "rgba(0,0,0, .3)";
      });
      list.addEventListener("dragleave", function (e) {
        e.preventDefault();
        this.style.backgroundColor = "rgba(0,0,0, 0)";
      });
      list.addEventListener("drop", function (e) {
        this.style.backgroundColor = "rgba(0,0,0, 0)";
        this.append(dragedItem);
      });
    }
  }
}

addTask();
changeTilte();
removeCard();
dragAndDrop();

newBoard.addEventListener("click", addBoard);
