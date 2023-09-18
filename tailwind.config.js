/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			tab: "640px",
			laptop: "1024px",
		},
		extend: {
			colors: {
				background: "#150E28",
				primary: "#D434FE",
				secondary: "#903AFF",
				abstract: "#FF26B9",
			},
			backgroundImage: {
				button:
					"linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
			},
			fontFamily: {
				heading: ["Clash Display", "sans-serif"],
			},
		},
	},
	plugins: [],
};
