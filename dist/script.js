const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");

const showNav = () => {
	nav.classList.toggle("show-links");
};

const autoHideNav = () => {
	if (window.scrollY >= 200) {
		nav.classList.remove("show-links");
	}
};

window.addEventListener("scroll", autoHideNav);
hamburger.addEventListener("click", showNav);
