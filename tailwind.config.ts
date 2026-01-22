import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',
        beige: '#F5E6D3',
        'soft-red': '#E63946',
        gold: '#D4AF37',
        'warm-gray': '#4A4A4A',
        'light-gold': '#F4E4C1',
      },

      fontFamily: {
        sans: [
          'Noto Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'Playfair Display',
          'serif',
        ],
      },

      backgroundImage: {
        'lotus-pattern':
          "url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M40 10 Q50 20 40 30 Q30 20 40 10 M40 50 Q50 60 40 70 Q30 60 40 50\" stroke=\"%23D4AF37\" stroke-width=\"0.5\" fill=\"none\" opacity=\"0.06\"/%3E%3C/svg%3E')",
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
