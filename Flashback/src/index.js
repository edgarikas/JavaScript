let rows = 8;
let result = document.querySelector(".r");
let triangle = document.querySelector(".triangle");
let pyramid = document.querySelector(".pyramid");
let reversePyramid = document.querySelector(".reversePyramid");
let action = document.querySelector(".action");
let clear = document.querySelector(".clear");
let romb = document.querySelector(".romb");

let textToString = "";

// Functions

//Triangle

function triangleF(rows) {
  textToString = "";
  result.innerHTML = "";
  for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= i; j++) {
      textToString += "*";
      textToString += "&nbsp";
    }

    textToString += "<br/>";
  }
  result.innerHTML = textToString;
}

//Pyramid
function pyramidF(rows) {
  textToString = "";
  result.innerHTML = "";
  for (var i = 1; i <= rows; i++) {
    for (var k = 1; k <= rows - i; k++) {
      textToString += "&nbsp";
    }
    for (var j = 1; j <= i; j++) {
      textToString += "&nbsp";
      textToString += "*";
    }
    textToString += "<br/>";
  }
  result.innerHTML = textToString;
}

//Reverse Pyramid

function reverseP(rows) {
  textToString = "";
  result.innerHTML = "";
  var r = rows + 1;
  for (var i = 1; i <= rows; i++) {
    r -= 1;
    for (var j = 1; j <= i - 1; j++) {
      textToString += "&nbsp";
    }
    for (var k = r; k >= 1; k--) {
      textToString += "&nbsp";
      textToString += "*";
    }
    textToString += "<br/>";
  }
  result.innerHTML = textToString;
}

function rombas(rows) {
  textToString = "";
  result.innerHTML = "";
  for (var i = 1; i <= rows - 1; i++) {
    for (var k = 1; k <= rows - i; k++) {
      textToString += "&nbsp";
    }
    for (var j = 1; j <= i; j++) {
      textToString += "&nbsp";
      textToString += "*";
    }
    textToString += "<br/>";
  }
  var r = rows + 1;
  for (var i = 1; i <= rows; i++) {
    r -= 1;
    for (var j = 1; j <= i - 1; j++) {
      textToString += "&nbsp";
    }
    for (var k = r; k >= 1; k--) {
      textToString += "&nbsp";
      textToString += "*";
    }
    textToString += "<br/>";
  }
  result.innerHTML = textToString;
}

//Event with Switch

document.addEventListener("click", (e) => {
  console.dir(e.target);
  switch (e.target.className) {
    case "triangle btn":
      triangleF(rows);
      break;
    case "pyramid btn":
      pyramidF(rows);
      break;
    case "reversePyramid btn":
      reverseP(rows);
      break;
    case "clear btn":
      textToString = "";
      result.innerHTML = "";
      break;

    case "romb btn":
      rombas(rows);
      break;
  }
});
