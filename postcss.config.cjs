module.exports = {
  plugins: {
    // postcss-import DOIT être en premier :
    // il résout les @import avant que Tailwind traite les fichiers,
    // ce qui permet l'usage de @layer et @apply dans les fichiers importés.
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}
