const animation = document.querySelector('.animation');
const wrapper = document.querySelector('.wrapper');
const pointer = document.querySelector('.pointer');
const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('ul');
const lines = document.querySelectorAll('.line');
const listItems = document.querySelectorAll('li');
const text = document.querySelectorAll('.text');
const image = document.querySelectorAll('.image');
const images = document.querySelector('.images');


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
   lines.forEach(line => {
       line.classList.toggle('clicked');
   })
};

handleList = (e) => {
    list.classList.remove('active');
} 

document.addEventListener('mousemove', handlePointer);
hamburger.addEventListener('click', handleHamburger);
listItems.forEach(item => item.addEventListener('click', handleList));

// INTERSECTION OBSERVER

changeImage = (entries) => {
    entries.forEach(entry => {
        console.log(entry);
        if(!entry.isIntersecting) {
            images.lastElementChild.classList.remove('observing');
            images.firstElementChild.classList.remove('action');
            images.children[1].classList.remove('acting');
          
        } else {
            images.lastElementChild.classList.add('observing');
            images.firstElementChild.classList.add('action');
            images.children[1].classList.add('acting');
        }
    })
}

let options = {
    root: null,
    threshold: 1,
    rootMargin: '0px',

}

const sectionObserver = new IntersectionObserver(changeImage, options);

sectionObserver.observe(images.lastElementChild); 