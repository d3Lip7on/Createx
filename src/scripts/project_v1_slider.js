var similarProjectsSplide = new Splide('.similar-prjects__splide', {
	type: 'loop',
	perPage: 3,
	perMove: 1,
	gap: 30,
	pagination: false,
	breakpoints: {
		875: {
			perPage: 2,
		},
		455: {
			perPage: 1,
		},
	},
});

similarProjectsSplide.mount();
