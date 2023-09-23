/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			tab: "640px",
			laptop: "1024px",
		},
		extend: {
			animation: {
				"bounce-slow": "bounce 2s infinite",
				"ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
				wiggle: "wiggle 2s ease-in-out infinite",
			},
			backgroundImage: {
				button:
					"linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
				gradient:
					"radial-gradient(circle, rgba(74,19,120,1) 60%, rgba(148,187,233,1) 100%)",
				timeLine: "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
			},
			borderRadius: {
				"5px": "5px",
			},
			boxShadow: {
				form: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
			},
			colors: {
				background: "#150E28",
				primary: "#D434FE",
				secondary: "#903AFF",
				abstract: "#FF26B9",
			},
			fontFamily: {
				heading: ["Clash Display", "sans-serif"],
				countDown: ["Unica One", "cursive"],
			},
			fontSize: {
				"32px": "32px",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
			listStyleImage: {
				"term-list": 'url("/src/assets/terms-list.svg")',
			},
			spacing: {
				card: "min(1%, 10px)",
				min10px: "min(3%, 10px)",
				partners: "min(20px, 30%)",
			},
		},
	},
	plugins: [],
};
