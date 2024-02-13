//local reviews data -facem cu local data pt ca inca nu
//nu am invatat despre AJAX request

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    image:
      "https://i.pinimg.com/564x/f7/33/9c/f7339c5dd32c0ba0b1632032fc366913.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nihil minima maxime excepturi hic necessitatibus sunt, repellat, dolorem error saepe iure laudantium. Inventore, ab! Ea quos soluta blanditiis quo perspiciatis!",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    image:
      "https://i.pinimg.com/564x/f7/33/9c/f7339c5dd32c0ba0b1632032fc366913.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nihil minima maxime excepturi hic necessitatibus sunt, repellat, dolorem error saepe iure laudantium. Inventore, ab! Ea quos soluta blanditiis quo perspiciatis!",
  },
  {
    id: 3,
    name: "bia grigp",
    job: "front end",
    image:
      "https://i.pinimg.com/564x/f7/33/9c/f7339c5dd32c0ba0b1632032fc366913.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nihil minima maxime excepturi hic necessitatibus sunt, repellat, dolorem error saepe iure laudantium. Inventore, ab! Ea quos soluta blanditiis quo perspiciatis!",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "th boss",
    image:
      "https://i.pinimg.com/564x/f7/33/9c/f7339c5dd32c0ba0b1632032fc366913.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nihil minima maxime excepturi hic necessitatibus sunt, repellat, dolorem error saepe iure laudantium. Inventore, ab! Ea quos soluta blanditiis quo perspiciatis!",
  },
];
//select items
const img = document.getElementById("imagine");
const author = document.querySelector(".author");
const job = document.getElementById("job");
const information = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.getElementById("button");
//set starting item
let value = 0;
//load initial item,
window.addEventListener("DOMContentLoaded", function () {});
//show person based on item
function showPerson() {
  const item = reviews[value];
  img.src = item.image; //img din arrayul cu obiecte reviews //sau img.src=reviews[value].img
  author.textContent = item.name; //name din reviews
  job.textContent = item.job; //job din reviews
  information.textContent = item.text; //text din reviews
  //ca sa nu adaugam de fiecare data datele
}

//show next person
nextBtn.addEventListener("click", function () {
  value++;
  if (value > reviews.length - 1) {
    value = 0;
  }
  showPerson(value);
});
//show pre person
prevBtn.addEventListener("click", function () {
  value--;
  if (value < 0) {
    value = reviews.length - 1;
  }
  showPerson(value);
});

randomBtn.addEventListener("click", function () {
  value = getRandomNumber();
  showPerson();
});
function getRandomNumber() {
  return Math.floor(Math.random() * reviews.length);
}
