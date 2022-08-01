/*  --Selectors && Events--  */

/* Change Theme */
document.addEventListener("keydown", (event) => {
  if (event.key === "c") {
    const body = document.querySelector("body");
    const box = document.querySelectorAll(".box");
    body.style.backgroundColor = "black";
    console.log(body);
    box.forEach((e) => {
      e.style.backgroundColor = "gray";
      e.style.color = "wheat";
      console.dir("box");
    });
  } else if (event.key === "b") {
    const body = document.querySelector("body");
    const box = document.querySelectorAll(".box");
    box.forEach((e) => {
      e.style.backgroundColor = "lightblue";
      e.style.color = "black";
      console.dir("box");
    });
    body.style.backgroundColor = "white";
    console.log(body);
  }
});

// box color will change if you double click
document.addEventListener("dblclick", (event) => {
  const i = document.querySelectorAll(".box");
  i.forEach((e) => {
    e.style.backgroundColor = "green";
    console.log(i);
  });
});

// Delete Button
/*
let button = document.querySelector(".btnBuy");
button.addEventListener("click", () => {
  button.remove();
});

*/
// Select item
document.addEventListener("click", (event) => {
  event.preventDefault();
  console.dir(event.target);
});

let clickOnMe = false;
document.addEventListener("keydown", (event) => {
  if (event.key === "Shift") {
    clickOnMe = true;
  }
  if (event.key === "D" && clickOnMe == true) {
    const btn = document.querySelectorAll("button");
    console.log(btn);
    btn.forEach((event) => {
      event.style.backgroundColor = "wheat";
    });
    console.log(event);
  }
});

document.addEventListener("keyup", (event) => {
  console.log(event);
  if (event.key == "Shift") {
    clickOnMe = false;
  }
});

/*  --Functions--  */
function sum(nr1, nr2) {
  const r = nr1 + nr2;
  return r;
}

console.dir(sum(11, 4));
