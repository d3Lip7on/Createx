// document.addEventListener('DOMContentLoaded', function () {
// 	var splide = new Splide('.splide', {
// 		type: 'loop',
// 		padding: '5rem',
// 	});

// 	splide.mount();
// });

var splide = new Splide( '.splide',{	
	gap: '1200px',
	speed: number = 1300
} );
splide.mount();
// document.addEventListener('DOMContentLoaded', function () {
// 	var main = new Splide('#main-slider', {
// 		type: 'fade',
// 		heightRatio: 0.5,
// 		pagination: false,
// 		arrows: false,
// 		cover: true,
// 	});

// 	var thumbnails = new Splide('#thumbnail-slider', {
// 		rewind: true,
// 		fixedWidth: 100,
// 		fixedHeight: 100,
// 		isNavigation: true,
// 		gap: 10,
// 		focus: 'center',
// 		pagination: false,
// 		cover: true,
// 		dragMinThreshold: {
// 			mouse: 4,
// 			touch: 10,
// 		},
// 		breakpoints: {
// 			640: {
// 				fixedWidth: 66,
// 				fixedHeight: 38,
// 			},
// 		},
// 	});

// 	main.sync(thumbnails);
// 	main.mount();
// 	thumbnails.mount();
// });
