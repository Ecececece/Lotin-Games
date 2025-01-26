import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: '#673485',
      },
      fontFamily: {
        lotin: ['lotin', 'sans-serif'],
      },
      height: {
        'mainScreen': 'calc(100vh - 5rem)',
        '88': '23rem',
        '102': '28rem',
      },
      width: {
        '68': '16.5rem',
        '85': '20rem',
        'mainScreen': 'calc(100vw - 20rem)',
      },
    },
  },
  plugins: [],
} satisfies Config;
