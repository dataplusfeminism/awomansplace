/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{svelte,html,ts}'],
  theme: {
    extend: {},
    container: {
      center: true,
    },

    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      circle: 'circle'
    },

    onscreens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1900px'
    },

    fontFamily: {
      sans: [
        'Noto Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif'
      ],
      serif: [
        'Laila',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif'
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        'monospace'
      ],
      body: ['Vollkorn', 'Georgia', 'serif'],
      button: ['IBM Plex Sans', 'sans'],
    }
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-import"),
  ]
}

