document.addEventListener("DOMContentLoaded", function () {
	const body = document.querySelector("body");

	const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	if (systemPrefersDark) {
		body.classList.toggle('dark');
	}

	const menuBtn = document.getElementById("menu-btn");
	const themeBtn = document.getElementById("theme");
	const title = document.querySelector("h1");
	const header = document.querySelector("header");

	window.addEventListener('scroll', () => {
		const scrollY = window.scrollY || window.pageYOffset;
		const h1Bottom = title.getBoundingClientRect().top + window.scrollY;
		if(scrollY > h1Bottom) {
			header.classList.add('shadow');
		} else {
			header.classList.remove('shadow');
		}
	});

	menuBtn.addEventListener("click", () => {
		body.classList.toggle('open');
	});
	themeBtn.addEventListener("click", () => {
		body.classList.toggle('dark');
	});
});

