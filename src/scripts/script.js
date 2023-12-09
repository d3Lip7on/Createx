document.addEventListener('DOMContentLoaded', function () {
    var burgerMenu = document.getElementById('burger__menu');
    var mobileMenu = document.getElementById('mobile__menu');

    burgerMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('show');
    });
});
