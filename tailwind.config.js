// tailwind.config.js
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}', // Tailwind will scan your source files
	],
	theme: {
		extend: {
			fontFamily: {
				'sans-custom': [
					'system-ui',
					'-apple-system',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'"Noto Sans"',
					'"Liberation Sans"',
					'Arial',
					'Poppins',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},
		},
	},
	plugins: [],
};
