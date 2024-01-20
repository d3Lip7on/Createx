const offerspoiler = document.querySelector(".WEBpage__offer-subtitle");
const infospoiler = document.querySelector(".WEBpage__offer-text");

offerspoiler.onclick = () => {
  infospoiler.classList.toggle("active");
  offerspoiler.classList.toggle("WEBpage__offer-subtitle_active");
};
const offerspoiler1 = document.querySelector(".WEBpage__offer-subtitle2");
const infospoiler1 = document.querySelector(".WEBpage__offer-text2");

offerspoiler1.onclick = () => {
  infospoiler1.classList.toggle("active");
  offerspoiler1.classList.toggle("WEBpage__offer-subtitle2_active");
};
