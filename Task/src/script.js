let fixed = 5.64;
console.log(".toFixed = ", fixed.toFixed());

let ex = 50234422;
console.log("toExponential =  ", ex.toExponential(7));

let string = 100;
console.log("toString = ", string.toString());

let a = 1;
console.log("isNaN = ", isNaN(a));

let first = 25;
let second = -1;
console.log("isFinite = ", Number.isFinite(first * second));

let l = "1";
Number.isInteger(l);
console.log("isInteger = ", Number.isInteger(l));

console.log("parseInt = ", Number.parseInt(10.12, 10));

console.log("parseFloat = ", Number.parseFloat(10.21));

console.log("Number = ", Number("15"));

let txt =
  "    w You cannot see this page because you are not. logged in Please log in or register on .the web page   ";

console.log("length = ", txt.length);
console.log("charAt = ", txt.charAt(2));

let t1 = "Hello ";
let t2 = "World";
let t3 = " !!!!";
console.log("concat = ", t1.concat(t2, t3));

console.log("includes = ", txt.includes("Y", 3));

console.log("startWith =  ", txt.startsWith("w"));

console.log("endsWith =  ", txt.endsWith("."));

console.log("indexOf = ", txt.indexOf("aaa"));

console.log("lastIndexOf = ", txt.lastIndexOf("."));

console.log("repeat = ", txt.repeat(2));

console.log("replace = ", txt.replace("w", "HELLLLLOOOOU"));

console.log("replaceAll = ", txt.replaceAll(".", "*"));

console.log("Split = ", txt.split("."));

console.log("upperCase = ", txt.toUpperCase());

console.log("lowerCase = ", txt.toLocaleLowerCase());

console.log("trim = ", txt.trimLeft());