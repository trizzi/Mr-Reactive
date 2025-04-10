// tailwind.config.js
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'sans-custom': [
					'Poppins',
					'system-ui',
					'-apple-system',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'"Noto Sans"',
					'"Liberation Sans"',
					'Arial',
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
