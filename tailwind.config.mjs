/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0612',
        panel: '#140B24',
        grid: '#3A2466',
        text: '#EDE7FF',
        dim: '#A296C8',
        pink: '#FF2E97',
        cyan: '#00E5FF',
        sun: '#FFD300',
      },
      fontFamily: {
        sans: ['"Chakra Petch"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
