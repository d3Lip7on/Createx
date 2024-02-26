let slideIndex = 1;

function slider_arrow(param){
    const element = document.getElementById("test");
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
}
function span_button(param){
    const element = document.getElementById("test");
    element.classList.remove("top-section_img" + slideIndex);
    slideIndex=param
    element.classList.add("top-section_img" + slideIndex)
}