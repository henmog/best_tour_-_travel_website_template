module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B8860B", // Ethiopian gold warmth
          50: "#FEFCF5",
          100: "#FDF8E7",
          200: "#FAF0C4",
          300: "#F6E8A1",
          400: "#F0D85B",
          500: "#B8860B", // Main primary
          600: "#A67A0A",
          700: "#8B6508",
          800: "#705006",
          900: "#5C4105",
        },
        secondary: {
          DEFAULT: "#8B4513", // Ancient earth connection
          50: "#FAF7F4",
          100: "#F5EFE9",
          200: "#E7D7C8",
          300: "#D9BFA7",
          400: "#BD8F65",
          500: "#8B4513", // Main secondary
          600: "#7D3E11",
          700: "#68330E",
          800: "#53280B",
          900: "#442009",
        },
        accent: {
          DEFAULT: "#CD853F", // Warm invitation moments
          50: "#FDF9F5",
          100: "#FBF3EB",
          200: "#F5E1CC",
          300: "#EFCFAD",
          400: "#E3AB6F",
          500: "#CD853F", // Main accent
          600: "#B97839",
          700: "#9A6430",
          800: "#7B5026",
          900: "#65411F",
        },
        background: "#FEFEFE", // Clean cultural canvas
        surface: "#F8F6F0", // Subtle warmth depth
        text: {
          primary: "#2C1810", // Rich reading comfort
          secondary: "#6B4E3D", // Clear hierarchy support
        },
        success: {
          DEFAULT: "#228B22", // Ethiopian highlands green
          50: "#F0FDF0",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#228B22", // Main success
          600: "#1F7A1F",
          700: "#1B691B",
          800: "#165816",
          900: "#124712",
        },
        warning: {
          DEFAULT: "#DAA520", // Gentle attention drawing
          50: "#FEFDF0",
          100: "#FEFBE8",
          200: "#FEF3C7",
          300: "#FDE68A",
          400: "#FCD34D",
          500: "#DAA520", // Main warning
          600: "#C4941D",
          700: "#A37C1A",
          800: "#826316",
          900: "#6B5114",
        },
        error: {
          DEFAULT: "#CD5C5C", // Concerned helpfulness
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#CD5C5C", // Main error
          600: "#B95353",
          700: "#9B4444",
          800: "#7C3636",
          900: "#652D2D",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        accent: ['Crimson Text', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'warm': '0 1px 3px 0 rgba(139, 69, 19, 0.1), 0 1px 2px 0 rgba(139, 69, 19, 0.1)',
        'warm-md': '0 4px 6px -1px rgba(139, 69, 19, 0.15), 0 2px 4px -1px rgba(139, 69, 19, 0.15)',
        'warm-lg': '0 10px 15px -3px rgba(139, 69, 19, 0.2), 0 4px 6px -2px rgba(139, 69, 19, 0.2)',
      },
      transitionDuration: {
        'gentle': '300ms',
        'substantial': '400ms',
      },
      transitionTimingFunction: {
        'gentle': 'ease-out',
        'substantial': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'cultural': '0.375rem',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'parallax': 'parallax 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}