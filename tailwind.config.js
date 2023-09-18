/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				heading: ["Clash Display", "sans-serif"],
			},
			colors: {
				background: "#150E28",
				primary: "#D434FE",
				secondary: "#903AFF",
				abstract: "#FF26B9",
			},
		},
	},
	plugins: [],
};
