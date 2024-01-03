
/*--------------------------------------- HAMBURGER MENU SCRİPT-----------------------------------------*/

hamburger = document.querySelector(".navbar-responsive");
hamburger.onclick = function () {
    navBar = document.querySelector(".navbar-bottom");
    navBar.classList.toggle("active");
}

/* openMenu = document.querySelector(".menu__about-us");
openMenu.onclick = function() {
    menu = document.querySelector(".open__menu");
    productsMenu = document.querySelector(".open__menu-products");
    menu.classList.toggle("active");
    productsMenu.classList.remove("active");
}

openMenuProducts = document.querySelector(".menu__products");
openMenuProducts.onclick = function() {
    productsMenu = document.querySelector(".open__menu-products");
    menu = document.querySelector("open__menu");
    productsMenu.classList.toggle("active");
    menu.classList.remove("active");
} */

document.querySelectorAll(".nav__link--dropdown a").forEach(function(el){
    el.addEventListener("click", function (e) {
        e.preventDefault();

        var menuId = e.target.dataset.menuId;
        var dropdownElement = document.querySelector("#" + menuId);

        if(dropdownElement.classList.contains("active")){
            dropdownElement.classList.remove("active")
        }else{
            document.querySelectorAll(".dropdown-menu").forEach(function(navLinkEl){
                navLinkEl.classList.remove("active")
            });

            document.querySelector("#" + menuId).classList.add("active");
        }
    })
})

document.body.addEventListener("click", function(e){
    if(!e.target.closest(".dropdown-menu") && !e.target.dataset.menuId){
        document.querySelectorAll(".dropdown-menu").forEach(function(navLinkEl){
            navLinkEl.classList.remove("active")
        });
    }
});

const navLink = document.querySelectorAll(".about-us__menu-list li");


const linkAction = function(){
    let navMenu = document.querySelector(".navbar-bottom");
    let navOpenMenu = document.querySelector(".open__menu");
    navMenu.classList.remove("active");
    navOpenMenu.classList.remove("active");
} 

navLink.forEach(n=> n.addEventListener("click",linkAction));


window.addEventListener("resize",function(){
    if(window.outerWidth >= 1024){
        document.querySelector(".navbar-bottom").classList.remove("active");
    }
});




