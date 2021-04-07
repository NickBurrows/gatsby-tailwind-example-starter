module.exports = {
  mode: 'jit',
  purge: {
    enabled: true, // 開發環境預設關閉，NODE_ENV設置production時啟用
    // preserveHtmlElements: false, // 保留HTML元素，預設true，如需禁用此功能設置為false
    content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
