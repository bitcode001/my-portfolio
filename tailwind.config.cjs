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
				primaryDark: '#2137F8',
				secondary: '#7470D4',
				info: '#A998ED',
				accent1: '#1AAF45',
				accent2: '#4F6695',
				accent3: '#FD8B31',
				success: '#0DB56A',
				warning: '#E6D00C',
				danger: '#F81F04',
				bgCol: '#F9F9FF',
				lightText: '#0A0808',
				// Add your custom color palette here

				mTheme: {
					colors: {
						white: '#FFFFFF',
						black: '#1C1B20',
						light: '#F0F2FF',
						primary: '#5769F8',
						primaryDark: '#2137F8',
						secondary: '#7470D4',
						info: '#A998ED',
						accent1: '#1AAF45',
						accent2: '#4F6695',
						accent3: '#FD8B31',
						success: '#0DB56A',
						warning: '#E6D00C',
						danger: '#F81F04',
						bgCol: '#F9F9FF',
						lightText: '#0A0808'
						// Add your custom color palette here
					}
				}
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif']
			},
			keyframes: {
				'reverse-spin': {
					from: {
						transform: 'rotate(360deg)'
					}
				},
				'custom-pulse': {
					'0%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.15)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				'custom-slide-in': {
					'0%': {
						transform: 'translateX(-5%)',
						opacity: 0
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: 1
					}
				}
			},
			animation: {
				'pulse-badge': 'custom-pulse 3s linear infinite',
				'spin-slow': 'spin 60s linear infinite',
				'spin-slow-x2': 'spin 120s linear infinite',
				'spin-slow-reverse': 'reverse-spin 90s linear infinite',
				'slide-in': 'custom-slide-in 0.5s ease-out forwards'
			}
		}
	},
	plugins: []
}
