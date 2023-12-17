const burger = document.getElementById("burger");
const menu = document.getElementById("burger__links")

burger.addEventListener("click", (e) => hideMenu(e));

function hideMenu() {
    if (!menu.classList.contains('header__navbar__container-hidden')) {
        menu.classList.add('header__navbar__container-hidden')
        menu.classList.remove('header__navbar__container-visible')
    } else {
        menu.classList.add('header__navbar__container-visible')
        menu.classList.remove('header__navbar__container-hidden')
    }
}
let menuBtn = document.querySelector('.header__navbar__burger-menu');
let menu1 = document.querySelector('.header__navbar__container');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu1.classList.toggle('active');
})