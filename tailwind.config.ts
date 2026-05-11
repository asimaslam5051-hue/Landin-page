import type { Config } from "tailwindcss"

const config: Config = {
  theme: {
    extend: {
      keyframes: {
       colorChange: {
         "0%, 100%": { backgroundColor: "#eab308" }, 
          "50%": { backgroundColor: "#facc14" }, 
       }
      },
      animation: {
        colorChange: "colorChange 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

export default config