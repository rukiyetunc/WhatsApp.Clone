module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      theme: {
        colors: {
          // Diğer özel renkleriniz...
        },
      },
      screens: {
        "whatsapp-bp": "755px",
      },
    },
  },
  plugins: [],
};
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

