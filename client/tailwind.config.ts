module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        middasgreen: "#15B287",
        middasdarkgreen: "#08745C",
        middasyellow: "#FDCD72",
        middasgray: "#F6F6F6",
        middasblue: "#2563EB",
        notblack: "#13293D",
        notwhite: "#E8F1F2",
      }, 
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   mode: "jit",
//   purge: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   content: [
//   ],
//   theme: {
//     extend: {
//       colors: {
//         middasgreen: "#15B287",
//         middasyellow: "#FDCD72",
//         middasgray: "#F6F6F6",
//         middasblue: "#2563EB",
//         notblack: "#13293D",
//         notwhite: "#E8F1F2",
//       }, 
//       fontFamily: {
//         poppins: ['Poppins', 'sans-serif']
//       }
//     },
//   },
//   plugins: [],
// };

