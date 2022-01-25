import { taskFunction } from "./_functions.js";

let input = document.getElementsByTagName("input")[0];
let addButton = document.getElementsByTagName("button")[0];
let ul = document.getElementsByTagName("ul")[0];
let allButton = document.getElementsByTagName("button")[1];
let doneButton = document.getElementsByTagName("button")[2];
let todoButton = document.getElementsByTagName("button")[3];

// INPUT ENTER
addButton.addEventListener("click", () => {
  taskFunction(input, ul);
});
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    taskFunction(input, ul);
  }
});
// FILTERS ---------
todoButton.addEventListener("click", () => {
  document.querySelectorAll(".checked").forEach((element) => {
    element.style.display = "none";
  });
  document.querySelectorAll(".todo").forEach((element) => {
    element.style.display = "flex";
  });
});

doneButton.addEventListener("click", () => {
  document.querySelectorAll(".todo").forEach((element) => {
    element.style.display = "none";
  });
  document.querySelectorAll(".checked").forEach((element) => {
    element.style.display = "flex";
  });
});

allButton.addEventListener("click", () => {
  document.querySelectorAll(".all").forEach((element) => {
    element.style.display = "flex";
  });
});

// doneButton.addEventListener("click", () => {
//   for (let i = 0; i < ul.children.length; i++) {
//     if ( ul.children[i].classList.contains("checked") == true) {
//       document.querySelectorAll(".checked").style.display = "none";
//     } else {
//     }
//   }
// });
