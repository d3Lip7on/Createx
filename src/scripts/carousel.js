// var splide = new Splide( '.splide',{
// 	gap: '1200px',
// 	speed: number = 1300
// } );
// splide.mount();

// document.addEventListener('DOMContentLoaded', function () {
// 	new Splide('#thumbnail-carousel', {
// 		fixedWidth: 100,
// 		gap: 10,
// 		rewind: true,
// 		pagination: false,
// 	}).mount();
// });
var main = new Splide('#main-carousel', {
	type: 'fade',
	rewind: true,
	pagination: false,
	arrows: true,
});

const thumbnailSlider = new Splide('#thumbnail-carousel', {
	fixedWidth: 100,
	fixedHeight: 100,
	gap: 10,
	rewind: true,
	pagination: false,
	isNavigation: true,
	arrows: false,
	gap: 20,
	drag: false,
});
main.sync(thumbnailSlider);
main.mount();
thumbnailSlider.mount();
