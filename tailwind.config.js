module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,ts}'],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  theme: {
    // colors: {
    // },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'lato': ['Lato'],
    },
    animationDelay: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
      500: "500ms",
      600: "600ms",
      700: "700ms",
      800: "800ms",
      900: "900ms",
      1000: "1000ms",
      1100: "1100ms",
    },
    extend: {
      colors: {
        "white": "#FFFFFF",
        "black": "#111111",
        "purple-050": "#B8BEED",
        "purple-100": "#ABB4EA",
        "purple-200": "#9FAAE7",
        "purple-300": "#93A0E4",
        "purple-400": "#8796E1",
        "purple-500": "#7B8CDE",
        "purple-600": "#6F82DB",
        "purple-700": "#6378D8",
        "purple-800": "#576ED5",
        "purple-900": "#4B64D2",
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-2.5%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'cursor-blink': {
          '0%': {
            transform: 'translate(8px, 0px)',
            opacity: '100%',
          },
          '8%': {
            opacity: '100%',
            transform: 'translateX(12px)',
          },
          '10%': {
            opacity: '100%',
            transform: 'translateX(16px)',
          },
          '18%': {
            transform: 'translateX(32px)',
            opacity: '100%',
          },
          '20%': {
            transform: 'translate(32px, 16px)',
            opacity: '100%',
          },
          '28%': {
            transform: 'translate(28px, 16px)',
            opacity: '100%',
          },
          '30%': {
            opacity: '100%',
          },
          '38%': {
            transform: 'translate(24px, 16px)',
            opacity: '100%',
          },
          '40%': {
            transform: 'translate(24px, 48px)',
            opacity: '100%',
          },
          '48%': {
            transform: 'translate(64px, 48px)',
            opacity: '100%',
          },
          '50%': {
            transform: 'translate(64px, 48px)',
            opacity: '100%',
          },
          '58%': {
            transform: 'translate(64px, 48px)',
            opacity: '100%',
          },
          '60%': {
            transform: 'translate(60px, 48px)',
            // transform: 'translateX(32px)',
            opacity: '100%',
          },
          '68%': {
            transform: 'translate(56px, 48px)',
            // transform: 'translate(32px, 16px)',
            opacity: '100%',
          },
          '70%': {
            transform: 'translate(52px, 48px)',
            opacity: '100%',
          },
          '78%': {
            transform: 'translate(52px, 48px)',
            opacity: '100%',
          },
          '80%': {
            transform: 'translate(52px, 32px)',
            opacity: '100%',
          },
          '88%': {
            transform: 'translate(52px, 16px)',
            opacity: '100%',
          },
          '90%': {
            transform: 'translate(52px, 0px)',
            opacity: '100%',
          },
          '92%': {
            transform: 'translate(32px, 0px)',
            opacity: '100%',
          },
          '98%': {
            transform: 'translate(16px, 0px)',
            opacity: '100%',
          },
          '100%': {
            transform: 'translate(8px, 0px)',
            opacity: '100%',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 500ms cubic-bezier(0.4, 0, 0.6, 1) forwards',
        'cursor-blink': 'cursor-blink 16000ms forwards infinite step-end',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
