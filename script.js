const animation = document.querySelector('.animation');
const wrapper = document.querySelector('.wrapper');
const pointer = document.querySelector('.pointer');
const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('ul');
const lines = document.querySelectorAll('.line');

//OPENING ANIMATION TIMEOUTS

stopDisplay = () => {
    animation.style.display = "none";
}

stopOpacity = () => {
    animation.style.opacity = 0;
}

startOpacity = () => {
    wrapper.style.opacity = 1;
    document.body.style.overflow = "visible";
    document.body.style.overflowX = "hidden";
}

setTimeout(stopDisplay, 10000);
setTimeout(stopOpacity, 3000);
setTimeout(startOpacity, 10000);

// EVENT LISTENERS

handlePointer = (e) => {
    pointer.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
};

handleHamburger = (e) => {
   list.classList.toggle('active');
   
};

document.addEventListener('mousemove', handlePointer);
hamburger.addEventListener('click', handleHamburger);