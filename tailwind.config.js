/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' }
        },
        'ripple-1': {
          '0%': { transform: 'scale(0.8)', opacity: 0.25 },
          '50%': { transform: 'scale(2.0)', opacity: 0.15 },
          '100%': { transform: 'scale(3.0)', opacity: 0 }
        },
        'ripple-2': {
          '0%': { transform: 'scale(0.8)', opacity: 0.25 },
          '50%': { transform: 'scale(2.0)', opacity: 0.15 },
          '100%': { transform: 'scale(3.0)', opacity: 0 }
        },
        'ripple-3': {
          '0%': { transform: 'scale(0.8)', opacity: 0.25 },
          '50%': { transform: 'scale(2.0)', opacity: 0.15 },
          '100%': { transform: 'scale(3.0)', opacity: 0 }
        }
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
        'ripple-1': 'ripple-1 3s infinite ease-out',
        'ripple-2': 'ripple-2 3s infinite ease-out 1s',
        'ripple-3': 'ripple-3 3s infinite ease-out 2s'
      },
      colors: {
        theme: {
          DEFAULT: '#f97316',
          dark: '#f97316',
        },
        dark: {
          bg: '#1a1b1e',
          card: '#25262b',
          hover: '#2c2d32',
          text: {
            primary: '#ffffff',
            secondary: '#a1a1aa',
          },
          border: '#2e2e35'
        },
        tremor: {
          brand: {
            faint: "#eff6ff",
            muted: "#bfdbfe",
            subtle: "#60a5fa",
            DEFAULT: "#3b82f6",
            emphasis: "#1d4ed8",
            inverted: "#ffffff",
          },
          background: {
            muted: "#f9fafb",
            subtle: "#f3f4f6",
            DEFAULT: "#ffffff",
            emphasis: "#374151",
          },
          border: {
            DEFAULT: "#e5e7eb",
          },
          ring: {
            DEFAULT: "#e5e7eb",
          },
          content: {
            subtle: "#9ca3af",
            DEFAULT: "#6b7280",
            emphasis: "#374151",
            strong: "#111827",
            inverted: "#ffffff",
          },
        },
      },
      boxShadow: {
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
      },
      fontSize: {
        "tremor-label": ["0.75rem"],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-|text-|border-|ring-|from-|to-|divide-|placeholder-|shadow-|accent-)?tremor-/,
    },
  ],
  plugins: [],
}