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
				solar: {
				  900: "#402708",
				  800: "#855111",
				  600: "#cb7c1a",
				  700: "#e49028",
				  500: "#E8A24B",//Main
				  400: "#ecb46e",
				  300: "#f1c691",
				  200: "#f5d8b3",
				  100: "#fcf3e8",
			  },
			
				punk: {
				  900: "#09312f",
				  800: "#11635f",
				  700: "#14746f",
				  600: "#1a958f",
				  500: "#1DA69F",//Main
				  600: "#20b7af",
				  300: "#26d8cf",
				  200: "#9aede9",
				  100: "#bbf3f0",
				},
  
				bgs: {
					900: "#0567A8",//backgrounnd dark
					800: "#067ece",
					700: "#0796f4",
					600: "#022d49",
					500: "#E05D5D",//Error
					400: "#ffe397",
					300: "#fff3d1",
					200: "#f3f2f1",
					100: "#FFF8E5",//background light
				},


				glass: {
					900: "#022d4950",//glass dark
					800: "#1DA69F80",
					700: "#0796f425",
					600: "#00000075",
					500: "#E05D5D80",
					400: "#ffffff75",
					300: "#ffe39725",
					200: "#E8A24B80",
					100: "#FFF8E550",//glass light
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
				'lg': '25px',
				'gen': '30px',
				'med': '20px',
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
  };