// BUTTONS - ROW 1 ---------
let white = document.querySelector(".white");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let solid = document.querySelector(".solid");
let dashed = document.querySelector(".dashed");
let dotted = document.querySelector(".dotted");
let top1 = document.querySelector(".top1");
let top2 = document.querySelector(".top2");
let top3 = document.querySelector(".top3");
let rectangle = document.getElementsByClassName("rectangle")[0];

// COLOR
white.addEventListener("click", () => {
  rectangle.style.backgroundColor = "white";
  rectangle.style.border = "1px solid lightgrey";
});
red.addEventListener("click", () => {
  rectangle.style.backgroundColor = "red";
});
green.addEventListener("click", () => {
  rectangle.style.backgroundColor = "green";
});
blue.addEventListener("click", () => {
  rectangle.style.backgroundColor = "#006eb3";
});

// BORDER
solid.addEventListener("click", () => {
  rectangle.style.border = "3px solid black";
});
dashed.addEventListener("click", () => {
  rectangle.style.border = "3px dashed black";
});
dotted.addEventListener("click", () => {
  rectangle.style.border = "3px dotted black";
});

// BORDER-WIDTH
top1.addEventListener("click", () => {
  rectangle.style.borderTop = "none";
});
top2.addEventListener("click", () => {
  rectangle.style.borderTopWidth = "10px";
});
top3.addEventListener("click", () => {
  rectangle.style.borderTopWidth = "25px";
});

// INPUTS - ROW 2 ---------
let colorPicker = document.querySelector("#pick-color");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let input4 = document.querySelector(".input4");
let input5 = document.querySelector(".input5");
let input6 = document.querySelector(".input6");
let input7 = document.querySelector(".input7");
let input8 = document.querySelector(".input8");
let input9 = document.querySelector(".input9");
let input10 = document.querySelector(".input10");
let input11 = document.querySelector(".input11");

colorPicker.addEventListener("change", () => {
  rectangle.style.backgroundColor = colorPicker.value;
});

input2.addEventListener("change", () => {
  rectangle.style.borderWidth = input2.value + "px";
});
input3.addEventListener("change", () => {
  rectangle.style.borderTopWidth = input3.value + "px";
});
input4.addEventListener("change", () => {
  rectangle.style.borderRightWidth = input4.value + "px";
});
input5.addEventListener("change", () => {
  rectangle.style.borderBottomWidth = input5.value + "px";
});
input6.addEventListener("change", () => {
  rectangle.style.borderLeftWidth = input6.value + "px";
});

// INPUTS - ROW 3 ---------
input7.addEventListener("change", () => {
  rectangle.style.borderRadius = input7.value + "px";
});
input8.addEventListener("change", () => {
  rectangle.style.borderTopLeftRadius = input8.value + "px";
});
input9.addEventListener("change", () => {
  rectangle.style.borderTopRightRadius = input9.value + "px";
});
input10.addEventListener("change", () => {
  rectangle.style.borderBottomRightRadius = input10.value + "px";
});
input11.addEventListener("change", () => {
  rectangle.style.borderBottomLeftRadius = input11.value + "px";
});
