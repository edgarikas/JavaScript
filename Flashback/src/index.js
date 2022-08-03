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
  for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= i; j++) {
      textToString += "*";
    }
    textToString += "<br/>";
  }
  result.innerHTML = textToString;
}

//Pyramid
function pyramidF(rows) {
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
  for (var i = rows; i >= 1; i--) {
    for (var j = i; j >= 1; j--) {
      document.write("1");
      document.write("*");
    }

    document.write("<br/>");
  }
  result.innerHTML = textToString;
}

//Event with Switch

document.addEventListener("click", (e) => {
  console.dir(e.target);
  switch (e.target.className) {
    case "triangle":
      console.log("HI");
      triangleF(rows);
      break;
    case "pyramid":
      console.log("HI");
      pyramidF(rows);
      break;
    case "reversePyramid":
      console.log("HI");
      reverseP(rows);
      break;
    case "clear":
      console.log("HI");
      textToString = "";
      result.innerHTML = "";
      break;
  }
});
