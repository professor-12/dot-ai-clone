/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"muted": "#868c98",
				"#1f6f15":"#1f6f15",
				"paleteBlue": "#f2f6fe"
			}
			,
			fontFamily: {
				"grosek": "var(--font-grosek)",
				"inter": "var(--font-inter)",
				"grotesk25": "var(--font-grotesk25)"
			}

		},
	},
	plugins: [],
}


