// tailwind.config.js

module.exports = {
  mode: 'jit', // JIT mode لتفادي الحاجة إلى إعادة بناء ضخمة
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // قم بتجميع Tailwind CSS مع ملفات JS و TS في مشروعك
  ],
  darkMode: false, // أو 'media' أو 'class' لتفعيل الوضع المظلم
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // أضف لون أساسي مخصص
        secondary: '#ffed4a', // أضف لون ثانوي مخصص
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'], // إضافة فاريانت (variants) مخصصة
    },
  },
  plugins: [],
};
