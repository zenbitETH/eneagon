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
			maxHeight: {
				'half': '50%',
			  },
			colors: {
				display: ["group-hover"],
				color1: {
				  900: "#283483",
				  800: "#18257b",
				  600: "#2233ad",
				  700: "#3347d7",
				  500: "#4356DA",//Main
				  400: "#6473e0",
				  300: "#95a0ea",
				  200: "#b6bdf1",
				  100: "#e7e9fa",
			  },
			
				color2: {
				  900: "#894D44",
				  800: "#7a2417",
				  700: "#d74530",
				  600: "#de6251",
				  500: "#E48072",//Main
				  600: "#ea9e93",
				  300: "#f1bbb4",
				  200: "#f7d9d5",
				  100: "#fdf7f6",
				},
  
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

				hover: {
					900: "#719CE4",//backgrounnd dark
					800: "#2765cc",
					700: "#CB3837",//npm
					600: "#238636",//github
					500: "#02500F",//lens
					400: "#D5005E",//instagram
					300: "#007AB9",//linkedin
					200: "#55ACEF",//twitter
					100: "#5865F2",//discord
				},

				glass: {
					900: "#022d4950",//glass dark
					800: "#E4807280",
					700: "#00000025",
					600: "#00000075",
					500: "#72e48080",
					400: "#ffffff75",
					300: "#ffffff25",
					200: "#4356DA80",
					100: "#FFFFFF50",//glass light
				},

			
			},
			spacing: {
				88: "22rem",
			},
			screens: {
				'2xl': '1800px',
				'xl': '1200px',
				'md': '900px',
			  },
			borderRadius: {
				'dc': '12px',
				'lg': '25px',
				'gen': '32px',
				'med': '20px',
				'but': '52px',
			},
			fontFamily: {
				ar: ['Archivo'],
				k2: ['K2D'],
			},
			container: {
				center: true,
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		// ...
	  ],
  };