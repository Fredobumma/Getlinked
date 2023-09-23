export const scrollToView = (e, path) => {
	if (path.includes("register") || path.includes("contact")) return;

	const section = document.querySelector(`#${path.toLowerCase()}`);
	if (!section) return;

	e.preventDefault();
	window.scrollTo({
		top: section.offsetTop,
		behavior: "smooth",
	});
};
