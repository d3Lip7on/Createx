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
	drag: true,
	
});
main.sync(thumbnailSlider);
main.mount();
thumbnailSlider.mount();
