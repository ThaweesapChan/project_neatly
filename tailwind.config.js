/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}", // ระบุไฟล์ที่ Tailwind จะทำงานด้วย
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: "#E5EFEC",
          200: "#C1D9D2",
          300: "#9DC2B8",
          400: "#7AAC9F",
          500: "#568586",
          600: "#3D6C68",
          700: "#2E524F",
          800: "#1F3835",
          900: "#11201C",
        },
        orange: {
          100: "#FCE8DE",
          200: "#F9C9B7",
          300: "#F6AA90",
          400: "#F18B68",
          500: "#EC6B40",
          600: "#E24528",
          700: "#B83521",
          800: "#8E261B",
          900: "#641815",
        },
        gray: {
          100: "#F8F8F9",
          200: "#E7E7EA",
          300: "#D6D6DB",
          400: "#B4B5BE",
          500: "#8D8E9A",
          600: "#717285",
          700: "#55576E",
          800: "#3A3C57",
          900: "#1F213F",
        },
        utility: {
          white: "#FFFFFF",
          black: "#000000",
          red: "#E53E3E",
          bg: "#F9FAFB",
        },
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        notoSerif: ["Noto Serif", "serif"],
        inter: ["Inter", "sans-serif"],
        ibmPlexSansThai: ["IBM Plex Sans Thai", "sans-serif"],
      },
      boxShadow: {
        custom: "4px 4px 16px 0 rgba(0, 0, 0, 0.08)",
      },
      components: {
        button: {
          primary_org500:
            "bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-500",
          primary_org600:
            "bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-600",
          primary_org700:
            "bg-orange-700 text-white py-2 px-4 rounded hover:bg-orange-700",
          primary_gray300:
            "bg-gray-300 text-gray-600 py-2 px-4 rounded hover:bg-gray-300",

          secondary_org400:
            "bg-white border-orange-400 text-orange-400 py-2 px-4 rounded hover:bg-orange-400 ",
          secondary_org500:
            "bg-white border-orange-500 text-orange-500 py-2 px-4 rounded hover:bg-orange-500",
          secondary_org600:
            "bg-white border-orange-600 text-orange-600 py-2 px-4 rounded hover:bg-orange-600",
          secondary_gray400:
            "bg-white border-gray-400 text-gray-400 py-2 px-4 rounded hover:bg-gray-300",

          ghost_org500:
            "bg-transparent text-orange-500 py-2 px-4 rounded hover:bg-orange-100",
          ghost_org400:
            "bg-transparent text-orange-400 py-2 px-4 rounded hover:bg-orange-100",
          ghost_gray500:
            "bg-transparent text-gray-500 py-2 px-4 rounded hover:bg-gray-100",
        },
      },
    },
  },
  plugins: [],
};
