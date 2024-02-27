let slideIndex = 1;

function slider_arrow(param){
    const element = document.getElementById("top-section");
    let prevIndex = slideIndex - 1 < 1 ? 4 : slideIndex - 1;
    let nextIndex = slideIndex + 1 > 4 ? 1 : slideIndex + 1;

    element.classList.remove("top-section_img" + slideIndex);

    if (param === 'forward') {
        element.classList.add("top-section_img" + nextIndex)
        slideIndex = nextIndex
    } else {
        element.classList.add("top-section_img" + prevIndex)
        slideIndex = prevIndex
    }
    updateActiveClass();
}
function span_button(param){
    const element = document.getElementById("top-section");
    element.classList.remove("top-section_img" + slideIndex);
    slideIndex=param
    element.classList.add("top-section_img" + slideIndex)
    updateActiveClass();
}
function updateActiveClass() {
    for (let i = 1; i <= 4; i++) {
        const spanElement = document.getElementById("slider-block" + i);
        if (i === slideIndex) {
            spanElement.classList.add("top-section__block_active");
        } else {
            spanElement.classList.remove("top-section__block_active");
        }
    }
}