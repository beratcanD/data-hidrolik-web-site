hamburger = document.querySelector(".navbar-responsive");
hamburger.onclick = function () {
    navBar = document.querySelector(".navbar-bottom");
    navBar.classList.toggle("active");
}

openMenu = document.querySelector(".menu__about-us");
openMenu.onclick = function() {
    menu = document.querySelector(".open__menu");
    menu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav__link");

const linkAction = function(){
    let navMenu = document.querySelector(".navbar-bottom");
    navMenu.classList.remove("active");
}

navLink.forEach(n=> n.addEventListener("click",linkAction));


const slider = 
    document.querySelector(".hero");
const arrLeft = 
    document.querySelector(".arrow-left");
const arrRight = 
    document.querySelector(".arrow-right");

const images = [
    "bg1.png" , "bg2.png"
];

let id = 0;

function slide(id){
    slider.style.backgroundImage =  
    `url(../assets/images/${images[id]})`; 
}

arrLeft.addEventListener("click",() => {
    id--;

    if(id < 0){
        id = images.length - 1;
    }

    slide(id);
});

arrRight.addEventListener("click",() => {
    id++;

    if(id > images.length -1){
        id = 0;
    }

    slide(id);
});

