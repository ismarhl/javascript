// TOP 6 BUTTONS ---------
let exo1 = document.getElementsByTagName("button")[0];
let exo2 = document.getElementsByTagName("button")[1];
let exo3 = document.getElementsByTagName("button")[2];
let exo4 = document.getElementsByTagName("button")[3];
let exo5 = document.getElementsByTagName("button")[4];
let exo6 = document.getElementsByTagName("button")[5];

// SECTIONS ---------
let section1 = (document.getElementsByTagName("section")[0].style.display =
  "none");
let section2 = (document.getElementsByTagName("section")[1].style.display =
  "none");
let section3 = (document.getElementsByTagName("section")[2].style.display =
  "none");
let section4 = (document.getElementsByTagName("section")[3].style.display =
  "none");
let section5 = (document.getElementsByTagName("section")[4].style.display =
  "none");
let section6 = (document.getElementsByTagName("section")[5].style.display =
  "none");

// EXO 1
let h2 = document.getElementsByTagName("h2")[0];
let functionH2 = () => {
  h2.textContent = "Le titre est modifié";
  h2.style.backgroundColor = "pink";
  h2.classList.add("bootstrap");
};
functionH2();

// EXO 2
exo1.addEventListener("click", () => {
  [...document.getElementsByTagName("section")].forEach((element) => {
    element.style.display = "none";
  });
  document.getElementsByTagName("section")[0].style.display = "";
});

exo2.addEventListener("click", () => {
  [...document.getElementsByTagName("section")].forEach((element) => {
    element.style.display = "none";
  });
  document.getElementsByTagName("section")[1].style.display = "";
});

exo3.addEventListener("click", () => {
  [...document.getElementsByTagName("section")].forEach((element) => {
    element.style.display = "none";
  });
  document.getElementsByTagName("section")[2].style.display = "";
});

exo4.addEventListener("click", () => {
  [...document.getElementsByTagName("section")].forEach((element) => {
    element.style.display = "none";
  });
  document.getElementsByTagName("section")[3].style.display = "";
});

exo5.addEventListener("click", () => {
  [...document.getElementsByTagName("section")].forEach((element) => {
    element.style.display = "none";
  });
  document.getElementsByTagName("section")[4].style.display = "";
});

exo6.addEventListener("click", () => {
  [...document.getElementsByTagName("section")].forEach((element) => {
    element.style.display = "none";
  });
  document.getElementsByTagName("section")[5].style.display = "";
});

// EXO 3
let maSpan = document.getElementsByTagName("span")[0];
let buttonGo = document.getElementsByTagName("button")[6];
console.log(buttonGo);

buttonGo.addEventListener("click", () => {
  maSpan.innerText = document.getElementsByTagName("input")[0].value;
  document.getElementsByTagName("input")[0].value = "";
});

// EXO 4
let buttonSwap = document.getElementsByTagName("button")[7];
let source = document.getElementsByClassName("source")[0];
let destination = document.getElementsByClassName("destination")[0];
let rouge = document.getElementsByClassName("rouge")[0];

buttonSwap.addEventListener("click", () => {
  if (rouge.parentElement == source) {
    destination.appendChild(rouge);
  } else if (rouge.parentElement == destination) {
    source.appendChild(rouge);
  }
});

let count = 0;
let number = document.getElementsByTagName("span")[1];
let index = 1;

buttonSwap.addEventListener("click", () => {
  number.innerHTML = index++;
});

// EXO 5
let buttonEgg = document.getElementById("button-egg");
let image = document.getElementsByTagName("img")[0];
containerEgg = document.getElementsByClassName("egg-container")[0];

buttonEgg.addEventListener("click", () => {
  containerEgg.innerHTML += image.outerHTML;
});

// EXO 6
// NIVEAU 1 ---------
let buttonEgal = document.getElementsByTagName("button")[10];
let result = document.getElementsByTagName("span")[2];
let input1 = document.getElementsByTagName("input")[1];
let input2 = document.getElementsByTagName("input")[2];

buttonEgal.addEventListener("click", () => {
  result.innerHTML = Number(input1.value) + Number(input2.value);
});

// NIVEAU 2 ---------
let input3 = document.getElementsByClassName("mon-input")[0];
let btnCalculatrice = document.getElementsByClassName("btn-calculatrice");
let result2 = document.getElementsByTagName("span")[3];
let equal = document.querySelector(".equal");
console.log(equal);
let clear = document.getElementById("c");

[...btnCalculatrice].forEach((element) => {
  element.addEventListener("click", (e) => {
    input3.value += e.target.id;
    console.log(element);
  });
});

equal.addEventListener("click", () => {
  input3.value = eval(input3.value);
});

clear.addEventListener("click", () => {
  input3 = "";
});
