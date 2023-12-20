const burger = document.getElementById("burger");
const menu = document.getElementById("burger__links")

burger.addEventListener("click", () => hideMenu());
function hideMenu() {
    menu.classList.toggle('header__navbar__container-visible')
}
let menuBtn = document.querySelector('.burger-button');
let menu1 = document.querySelector('.navbar-nav');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
})