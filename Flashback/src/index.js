let rows = 5;
let result = document.querySelector(".r");
let triangle = document.querySelector(".triangle");
let pyramid = document.querySelector(".pyramid");
let reversePyramid = document.querySelector(".reversePyramid");
let action = document.querySelector(".action");
let clear = document.querySelector(".clear");

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
      // document.write("1");
    }
    for (var j = 1; j <= i; j++) {
      textToString += "&nbsp";
      textToString += "*";
      // document.write("*");
    }
    textToString += "<br/>";
    //document.write("<br/>");
  }
  result.innerHTML = textToString;
}

//Reverse Pyramid

function reverseP(rows) {
  textToString = "";
  result.innerHTML = "";
  for (var i = rows; i >= 1; i--) {
    for (var j = i; j >= 1; j--) {
      textToString += "*";
      textToString += "&nbsp";
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
      console.log("HI");
      triangleF(rows);
      break;
    case "pyramid btn":
      console.log("HI");
      pyramidF(rows);
      break;
    case "reversePyramid btn":
      console.log("HI");
      reverseP(rows);
      break;
    case "clear btn":
      console.log("HI");
      textToString = "";
      result.innerHTML = "";
      break;
  }
});
