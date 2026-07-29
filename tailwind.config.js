export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#09090F',
        surface: '#18181B',
        primary: '#8B5CF6',
        accent: '#A855F7',
        border: 'rgba(255,255,255,0.08)',
        muted: '#A5B4FC',
      },
      boxShadow: {
        glow: '0 30px 90px rgba(139,92,246,0.15)',
        soft: '0 18px 50px rgba(0,0,0,0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top right, rgba(139,92,246,0.22), transparent 30%), radial-gradient(circle at 20% 20%, rgba(168,85,247,0.18), transparent 28%)',
      },
    },
  },
  plugins: [],
};
