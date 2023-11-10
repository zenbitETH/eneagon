/** @type {import('tailwindcss').Config} */ 
module.exports = {

	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	enabled: true,
	darkMode: "class",
	variants: {
	  fill: ['hover', 'focus'], // this line does the trick
	},
	theme: {
		extend: {
		  colors: {
			display: ["group-hover"],
			bgd: "#101427",
			bgm: "#006363",
			bgc: "#e88110",
			cit: "#F3A754",
			mod: "#008A8A",
			backgrounds: {
				900: "#719CE4",//backgrounnd dark
				800: "#2765cc",
				700: "#75C31D",
				600: "#9E9E9E",//button
				500: "#FAFAFA",//white
				400: "#2D3134",
				300: "#5538b5",
				200: "#cec5ed",
				100: "#A898DF",//background light
			},
			lunar: {
				100: "#119195",
				200: "#0b979b",
				300: "#119195",
				400: "#178b8f",
				500: "#247f82",
				600: "#024269",
				700: "#3e6768",
				800: "#4a5b5c",
				900: "#011B2F",
			},
		  },
		  fontFamily: {
			bau: ["Baumans"],
			exo: ["Exo"],
		  },
		  borderRadius: {
			dc: "12px",
			dd: "40px",
			gen: "32px",
			med: "22px",
			but: "52px",
		  },
		},
	},
	
	plugins: [
		require('@tailwindcss/forms'),
		require('tailwind-scrollbar-hide'),
		// ...
	  ],
  };