// const offerspoiler = document.querySelector(".offers__subtitle");
// const infospoiler = document.querySelector(".WEBpage__offer-text");

// offerspoiler.onclick = () => {
//   infospoiler.classList.toggle("active");
//   offerspoiler.classList.toggle("offers__subtitle_active");
// };
// const offerspoiler1 = document.querySelector(".offers__subtitle");
// const infospoiler1 = document.querySelector(".WEBpage__offer-text2");

// offerspoiler1.onclick = () => {
//   infospoiler1.classList.toggle("active");
//   offerspoiler1.classList.toggle("offers__subtitle_active");
// };

const offerspoilers = document.querySelectorAll(".offers__subtitle");
offerspoilers.forEach((offerspoiler) => {
  offerspoiler.addEventListener("click", () => {
    offerspoiler.classList.toggle("offers__subtitle_active");
    const text = offerspoiler.nextElementSibling;
    text.classList.toggle("offers__text_active");
  });
});
