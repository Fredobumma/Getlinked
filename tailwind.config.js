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
			fontFamily: {
				heading: ["Clash Display", "sans-serif"],
			},
		},
	},
	plugins: [],
};
