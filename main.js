document.addEventListener("DOMContentLoaded", function () {
	const body = document.querySelector("body");

	const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	if (systemPrefersDark) {
		body.classList.toggle('dark');
	}

	const isOnLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
	if (isOnLargeScreen) {
 		body.classList.toggle('open');
	}

	const isOnMidScreen = window.matchMedia("(min-width: 550px)").matches;
	const menuBtn = document.getElementById("menu-btn");
	const themeBtn = document.getElementById("theme");
	const title = document.querySelector("h1");
	const header = document.querySelector("header");
	const navLinks = document.querySelectorAll("nav a");
	const xpAnchor = document.getElementById("xp");

	const toggleMenu = () => body.classList.toggle('open');
	const addCurrentTo = (i) => {
		navLinks.forEach(l => l.classList.remove('current'));
		navLinks[i].classList.add('current');
	};
	const onScroll = () => {
		const scrollY = window.scrollY || window.pageYOffset;
		const h1Top = title.getBoundingClientRect().top + window.scrollY;
		const xpTop = xpAnchor.getBoundingClientRect().top + window.scrollY; 
		if(scrollY > h1Top) {
			header.classList.add('shadow');
		} else {
			header.classList.remove('shadow');
		}
		if(scrollY > (xpTop - 150)) {
			addCurrentTo(1);
		} else {
			addCurrentTo(0);
		}
	};

	navLinks.forEach((link, i) => link.addEventListener('click', (e) => {
		if (!isOnMidScreen) {
			toggleMenu();
		}
	}));

	window.addEventListener('scroll', onScroll);

	menuBtn.addEventListener("click", toggleMenu);
	themeBtn.addEventListener("click", () => {
		body.classList.toggle('dark');
	});
});

