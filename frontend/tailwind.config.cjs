module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extends: {
			fontFamily: {
				// inter: ['inter', 'sans-serif'],
				// poppins: ['poppins', 'serif'],
				notoSans: ['Noto-sans'],
				oswald: ['Oswald']
			}
		},

		fontSize: {
      xs: '12px',
      dimInHuj: '14px',
			sm: '16px',
			base: '20px',
			xl: '24px',
			'2xl': '32px',
			// '3xl': '1.953rem',
			// '4xl': '2.441rem',
			// '5xl': '3.052rem',
			// '6xl': '3.052rem',
			// '7xl': '3.052rem'
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	// daisyUI config (optional)
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#661AE6',
					secondary: '#D926AA',
					accent: '#1FB2A5',
					neutral: '#191D24',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		]
	}
};
