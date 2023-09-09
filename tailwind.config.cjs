/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem'
			}
		},
		extend: {
			colors: {
				white: '#FFFFFF',
				black: '#1C1B20',
				light: '#F0F2FF',
				primary: '#5769F8',
				secondary: '#7470D4',
				info: '#A998ED',
				accent1: '#1AAF45',
				accent2: '#4F6695',
				accent3: '#FD8B31',
				success: '#0DB56A',
				warning: '#E6D00C',
				danger: '#F81F04',
				bgCol: '#F9F9FF',
				// Add your custom color palette here

				mTheme: {
					colors: {
						white: '#FFFFFF',
						black: '#1C1B20',
						light: '#F0F2FF',
						primary: '#5769F8',
						secondary: '#7470D4',
						info: '#A998ED',
						accent1: '#1AAF45',
						accent2: '#4F6695',
						accent3: '#FD8B31',
						success: '#0DB56A',
						warning: '#E6D00C',
						danger: '#F81F04',
						bgCol: '#F9F9FF'
						// Add your custom color palette here
					}
				}
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif']
			}
		}
	},
	plugins: []
}
