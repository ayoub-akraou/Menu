"use strict";
// recipies data
const recipe1 = {
  meal: "breakfast",

  image: "images/item-1.jpeg",
  name: "Buttermilk Pancakes",
  price: "$15.99",
  description:
    "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
};
const recipe2 = {
  meal: "lunch",
  image: "images/item-2.jpeg",
  name: "Diner Double",
  price: "$13.99",
  description:
    "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
};
const recipe3 = {
  meal: "shakes",
  image: "images/item-3.jpeg",
  name: "Godzilla Milkshake",
  price: "$6.99",
  description:
    "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
};
const recipe4 = {
  meal: "breakfast",
  image: "images/item-4.jpeg",
  name: "Country Delight",
  price: "$20.99",
  description:
    "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
};
const recipe5 = {
  meal: "lunch",
  image: "images/item-5.jpeg",
  name: "Egg Attack",
  price: "$22.99",
  description:
    "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
};
const recipe6 = {
  meal: "shakes",
  image: "images/item-6.jpeg",
  name: "Oreo Dream  ",
  price: "$18.99",
  description:
    "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
};
const recipe7 = {
  meal: "breakfast",

  image: "images/item-7.jpeg",
  name: "Bacon Overflow",
  price: "$8.99",
  description:
    "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
};
const recipe8 = {
  meal: "lunch",
  image: "images/item-8.jpeg",
  name: "American Classic  ",
  price: "$12.99",
  description:
    "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
};
const recipe9 = {
  meal: "shakes",
  image: "images/item-9.jpg",
  name: "Quarantine Buddy  ",
  price: "$16.99",
  description:
    "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
};
const recipe10 = {
  meal: "dinner",
  image: "images/item-10.jpeg",
  name: "Steak Dinner",
  price: "$39.99",
  description:
    "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
};
//  variables
const recipesBox = document.querySelector(".recipes");
const tags = document.querySelector(".tags");
const recipes = [
  recipe1,
  recipe2,
  recipe3,
  recipe4,
  recipe5,
  recipe6,
  recipe7,
  recipe8,
  recipe9,
  recipe10,
];
// display data in DOM
function createElement(recipe) {
  return `
    <article class="recipe">
    <div class="image"><img src="${recipe.image}" alt="image" /></div>
    <div class="recipe__data">
    <h3 class="recipe__name">
      ${recipe.name}<span class="recipe__price">${recipe.price}</span>
    </h3>
    <hr />
    <p class="recipe__description">
    ${recipe.description}</p>
  </div>
</article>`;
}
function init() {
  recipes.forEach((e) => {
    recipesBox.insertAdjacentHTML("beforeend", createElement(e));
  });
}
init();
//  filtring fuctionnality
tags.addEventListener("click", function (e) {
  e = e.target;
  console.log(e.textContent);
  if (e.localName === "button" && e.textContent !== "all") {
    recipesBox.innerHTML = "";
    recipes.forEach((x) => {
      if (e.textContent === x.meal) {
        recipesBox.insertAdjacentHTML("beforeend", createElement(x));
      }
    });
  }
  if (e.localName === "button" && e.textContent === "all") {
    recipesBox.innerHTML = "";
    init();
  }
});
