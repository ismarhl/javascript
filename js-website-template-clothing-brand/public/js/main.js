// HEADER SECTION /////////////////////////////////////////////////////////
// NAVBAR SCROLL BLACK
let header = document.getElementsByTagName("header")[0];
let navIcon = document.querySelectorAll(".nav-icon");
let navLink = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 600);
  if (window.scrollY > 600) {
    logo.src = "./public/img/white-logo.png";
    navLink.forEach((element) => {
      element.style.color = "white";
    });
    document.querySelectorAll(".nav-icon").forEach((element) => {
      console.log("yo");
      element.classList.toggle("white-icons")
    });
  } else {
    logo.src = "./public/img/logo.png";
    navLink.forEach((element) => {
      element.style.color = "black";
    });
  }
});

// TOGGLE DARK MODE /////////////////////////////////////////////////////////
// NAV ICONS
let body = document.getElementsByTagName("body")[0];
let logo = document.getElementsByClassName("hongo-logo")[0];
let userIcon = document.getElementsByClassName("fa-user")[0];
let moonIcon = document.getElementsByClassName("fa-moon")[0];

// USER
userIcon.addEventListener("mouseover", () => {
  userIcon.setAttribute("class", "fas");
  userIcon.classList.add("fa-user");
});
userIcon.addEventListener("mouseout", () => {
  userIcon.setAttribute("class", "far");
  userIcon.classList.add("fa-user");
});

// MOON
moonIcon.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  moonIcon.classList.toggle("fa-sun");
  logo.src = "./public/img/white-logo.png";
});

// PRODUCT SECTION /////////////////////////////////////////////////////////
let productContainer = document.getElementsByClassName("products")[0];

// ADDING DIVS IN THE PRODUCT SECTION
// DIV 1
let div1 = document.createElement("div");
div1.setAttribute("class", "row justify-content-center align-items-center");
productContainer.prepend(div1);
// DIV 2
let div2 = document.createElement("div");
div2.setAttribute("class", "text-center mb-7");
div1.prepend(div2);
// H4
let h4 = document.createElement("h4");
let textH4 = document.createTextNode("Recent Products");
h4.prepend(textH4);
div2.prepend(h4);
// P
let p = document.createElement("p");
let textP = document.createTextNode(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and industry"
);
p.prepend(textP);
div2.appendChild(p);
p.innerHTML =
  "Lorem Ipsum is simply dummy text of the printing <br> and typesetting industry printing and industry";
// DIV 3
let div3 = document.createElement("div");
div3.setAttribute("classe", "row col-12");
div1.appendChild(div3);
// DIV 4
let div4 = document.createElement("div");
div4.setAttribute(
  "class",
  "insertProducts row col-12 mx-auto text-center justify-content-center align-items-center"
);
div3.prepend(div4);

let insertProducts = document.getElementsByClassName("insertProducts")[0];

// CLASS PRODUCTS
class Product {
  constructor(name, price, front, back) {
    this.name = name;
    this.price = price;
    this.front = front;
    this.back = back;
    // Méthode qui lance l'ajout des products
    this.addMyProducts = () => {
      // HTML type des products
      insertProducts.insertAdjacentHTML(
        "beforeend",
        `
<div class="test col-md-2 col-4 mx-1 mb-3 p-0">
    <div class="wrapper">
        <img class="model model-front show col-12" src="${this.front}" alt="model">
        <img class="model model-back hide col-12" src="${this.back}" alt="model">
        <button class="addCart hide col-6"><i class="fas fa-shopping-basket"></i></button>
        <button class="saveFavorite hide col-6"><i class="far fa-heart"></i></button>
        </div>
        <div class="pt-2">
            <p class="text-dark">${this.name}</p>
            <p>${this.price}</p>
        </div>
    </div>    
</div>
`
      );
    };
  }
}

// MY PRODUCTS
let products = [
  new Product(
    "Textured Sweater",
    "50 €",
    "./public/img/fashion/textured_sweater_front.jpg",
    "./public/img/fashion/textured_sweater_back.jpg"
  ),
  new Product(
    "Traveller Shirt",
    "60 €",
    "./public/img/fashion/traveller_shirt_front.jpg",
    "./public/img/fashion/traveller_shirt_back.jpg"
  ),
  new Product(
    "Crewneck Sweatshirt",
    "70 €",
    "./public/img/fashion/crewneck_sweatshirt_front.jpg",
    "./public/img/fashion/crewneck_sweatshirt_back.jpg"
  ),
  new Product(
    "Skinny Trousers",
    "110 €",
    "./public/img/fashion/skinny_trousers_front.jpg",
    "./public/img/fashion/skinny_trousers_back.jpg"
  ),
  new Product(
    "High Neck Sweater",
    "80 €",
    "./public/img/fashion/high_neck_sweater_front.jpg",
    "./public/img/fashion/high_neck_sweater_back.jpg"
  ),
  new Product(
    "Sleeve Sweater",
    "90 €",
    "./public/img/fashion/sleeve_sweater_front.jpg",
    "./public/img/fashion/sleeve_sweater_back.jpg"
  ),
  new Product(
    "Pocket Sweater",
    "110 €",
    "./public/img/fashion/pocket_sweater_front.jpg",
    "./public/img/fashion/pocket_sweater_back.jpg"
  ),
  new Product(
    "Top With Pleated",
    "70 €",
    "./public/img/fashion/top_with_pleated_front.jpg",
    "./public/img/fashion/top_with_pleated_back.jpg"
  ),
  new Product(
    "Cotton Sweater",
    "80 €",
    "./public/img/fashion/cotton_sweater_front.jpg",
    "./public/img/fashion/cotton_sweater_back.jpg"
  ),
  new Product(
    "Texture Plain Regular",
    "70 €",
    "./public/img/fashion/texture_plain_regular_front.jpg",
    "./public/img/fashion/texture_plain_regular_back.jpg"
  ),
];

// ADDING PRODUCTS TO THE SECTION
products.forEach((element) => {
  element.addMyProducts();
});

// let addCart = document.querySelector(".addCart");
// let saveFavorite = document.querySelector(".saveFavorite");
let model = document.querySelector(".model");
let wrapper = document.querySelector(".wrapper");

let modelFront = document.querySelectorAll(".model-front");
let modelBack = document.querySelectorAll(".model-back");

// SHOWING MODEL'S BACK
let showBackModel = (e) => {
  let modelFront = e.target.parentElement.querySelector(".model-front");
  let modelBack = e.target.parentElement.querySelector(".model-back");
  let addCart = e.target.parentElement.querySelector(".addCart");
  let saveFavorite = e.target.parentElement.querySelector(".saveFavorite");
  modelFront.classList.add("hide");
  modelFront.classList.remove("show");
  modelBack.classList.remove("hide");
  modelBack.classList.add("show");
  // SHOWING MODEL'S BUTTONS
  addCart.classList.add("show");
  addCart.classList.remove("hide");
  saveFavorite.classList.add("show");
  saveFavorite.classList.remove("hide");
};

// SHOWING MODEL'S FRONT
let showFrontModel = (e) => {
  let modelFront = e.target.parentElement.querySelector(".model-front");
  let modelBack = e.target.parentElement.querySelector(".model-back");
  let addCart = e.target.parentElement.querySelector(".addCart");
  let saveFavorite = e.target.parentElement.querySelector(".saveFavorite");
  modelFront.classList.add("show");
  modelFront.classList.remove("hide");
  modelBack.classList.remove("show");
  modelBack.classList.add("hide");
  // HIDING MODEL'S BUTTONS
  addCart.classList.add("hide");
  addCart.classList.remove("show");
  saveFavorite.classList.add("hide");
  saveFavorite.classList.remove("show");
};

// modelFront.addEventListener("mouseover", showBackModel);
// modelBack.addEventListener("mouseout", showFrontModel);

[...modelFront].forEach((element, index) => {
  element.addEventListener("mouseover", showBackModel);
  modelBack[index].addEventListener("mouseout", showFrontModel);
});

// BASKET & FAVORITE COUNTER
let counterFavorite = 0;
let counterBasket = 0;
let favoriteItem = document.querySelectorAll(".counter-favorite")[0];
let basketItem = document.querySelectorAll(".counter-basket")[0];
let addCart = document.getElementsByClassName("addCart");
let saveFavorite = document.getElementsByClassName("saveFavorite");

let favoriteFunction = () => {
  counterFavorite++;
  favoriteItem.classList.replace("hide", "show");
  favoriteItem.innerHTML = counterFavorite;
};
let basketFunction = () => {
  counterBasket++;
  basketItem.classList.replace("hide", "show");
  basketItem.innerHTML = counterBasket;
};

for (let index = 0; index < addCart.length; index++) {
  addCart[index].addEventListener("click", basketFunction);
}

for (let index = 0; index < saveFavorite.length; index++) {
  saveFavorite[index].addEventListener("click", favoriteFunction);
}

// TESTIMONIAL SECTION /////////////////////////////////////////////////////////
let slides = document.querySelectorAll(".slide-container");
let index = 0;
let nextChevron = document.querySelector(".chevron-right");
let previousChevron = document.querySelector(".chevron-left");

let nextSlide = () => {
  console.log(slides[index]);
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
};

let previousSlide = () => {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
};

nextChevron.addEventListener("click", nextSlide);
previousChevron.addEventListener("click", previousSlide);
