const animation = document.querySelector(".animation");
const wrapper = document.querySelector(".wrapper");
const pointer = document.querySelector(".pointer");
const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".navlist");
const lines = document.querySelectorAll(".line");
const listItems = document.querySelectorAll("li");
const text = document.querySelectorAll(".list-text");
const image = document.querySelectorAll(".image");
const images = document.querySelector(".images");
const projectImages = document.querySelectorAll(".project-img");
const card = document.querySelectorAll(".card");

//ICONS
feather.replace();

//OPENING ANIMATION TIMEOUTS

// stopDisplay = () => {
// animation.style.display = "none";
// };

// stopOpacity = () => {
// animation.style.opacity = 0;
// };

startOpacity = () => {
  wrapper.style.opacity = 1;
  // document.body.style.overflow = "visible";
  // document.body.style.overflowX = "hidden";
};

// setTimeout(stopDisplay, 10000);
// setTimeout(stopOpacity, 3000);
setTimeout(startOpacity, 800);

// EVENT LISTENERS

handlePointer = (e) => {
  pointer.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
};

handleHamburger = (e) => {
  list.classList.toggle("active");
  lines.forEach((line) => {
    line.classList.toggle("clicked");
  });
};

handleList = (e) => {
  list.classList.remove("active");
};

document.addEventListener("mousemove", handlePointer);
hamburger.addEventListener("click", handleHamburger);
listItems.forEach((item) => item.addEventListener("click", handleList));

// INTERSECTION OBSERVERS

changeImage = (entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (!entry.isIntersecting) {
      images.lastElementChild.classList.remove("observing");
      images.firstElementChild.classList.remove("action");
      images.children[1].classList.remove("acting");
    } else {
      images.lastElementChild.classList.add("observing");
      images.firstElementChild.classList.add("action");
      images.children[1].classList.add("acting");
    }
  });
};

loadImage = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loaded");
    } else {
      entry.target.classList.remove("loaded");
    }
  });
};

let options = {
  root: null,
  threshold: 1,
  rootMargin: "0px",
};

let projectOptions = {
  root: null,
  threshold: 0.5,
  rootMargin: "0px",
};

const introObserver = new IntersectionObserver(changeImage, options);
const projectObserver = new IntersectionObserver(loadImage, projectOptions);

introObserver.observe(images.lastElementChild);

card.forEach((picture) => {
  projectObserver.observe(picture);
});
