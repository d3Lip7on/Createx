const burger = document.getElementById("burger");
const menu = document.getElementById("burger__links")

burger.addEventListener("click", (e) => hideMenu(e));

function hideMenu(e) {
    if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden')
        menu.classList.remove('visible')
    } else {
        menu.classList.add('visible')
        menu.classList.remove('hidden')
    }
}
