import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // IBM Carbon color palette
        'carbon-gray': {
          10: '#f4f4f4',
          20: '#e0e0e0',
          30: '#c6c6c6',
          40: '#a8a8a8',
          50: '#8d8d8d',
          60: '#6f6f6f',
          70: '#525252',
          80: '#393939',
          90: '#262626',
          100: '#161616',
        },
        'carbon-blue': {
          10: '#edf5ff',
          20: '#d0e2ff',
          30: '#a6c8ff',
          40: '#78a9ff',
          50: '#4589ff',
          60: '#0f62fe',
          70: '#0043ce',
          80: '#002d9c',
          90: '#001d6c',
          100: '#001141',
        },
        'carbon-cool-gray': {
          10: '#f2f4f8',
          20: '#dde1e6',
          30: '#c1c7cd',
          40: '#a2a9b0',
          50: '#878d96',
          60: '#697077',
          70: '#4d5358',
          80: '#343a3f',
          90: '#21272a',
          100: '#121619',
        },
        'carbon-red': {
          10: '#fff1f1',
          50: '#ff8389',
          60: '#fa4d56',
          70: '#da1e28',
        },
        'carbon-green': {
          50: '#6fdc8c',
          60: '#42be65',
          70: '#24a148',
        },
        'carbon-yellow': {
          50: '#fddc69',
          60: '#f1c21b',
        },
        'carbon-purple': {
          50: '#be95ff',
          60: '#a56eff',
          70: '#8a3ffc',
        },
      },
      fontFamily: {
        'ibm-plex-sans': ['IBM Plex Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'ibm-plex-mono': ['IBM Plex Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      spacing: {
        // Carbon spacing scale
        '0.5': '0.125rem', // 2px
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '7': '1.75rem',    // 28px
        '8': '2rem',       // 32px
        '9': '2.25rem',    // 36px
        '10': '2.5rem',    // 40px
        '11': '2.75rem',   // 44px
        '12': '3rem',      // 48px
        '13': '3.5rem',    // 56px
        '14': '4rem',      // 64px
        '15': '5rem',      // 80px
        '16': '6rem',      // 96px
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',  // 2px
        DEFAULT: '0.25rem', // 4px
        'lg': '0.5rem',    // 8px
      },
      boxShadow: {
        'carbon': '0 2px 6px rgba(0, 0, 0, 0.2)',
        'carbon-lg': '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config
