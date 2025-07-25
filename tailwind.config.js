/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // ChatGPT style colors
        "chat-dark": "#0F0F0F",
        "chat-dark-secondary": "#1C1C1C",
        "chat-dark-tertiary": "#2D2D2D",
        "chat-light": "#F7F7F8",
        "chat-light-secondary": "#FFFFFF",
        "chat-border": "#E5E5E5",
        "chat-border-dark": "#404040",
        "chat-green": "#10A37F",
        "chat-green-hover": "#0D8A6B",
        "chat-text": "#0D0D0D",
        "chat-text-secondary": "#8E8EA0",
        "chat-text-dark": "#ECECF1",
        "chat-text-dark-secondary": "#C5C5D2",
      },
      fontFamily: {
        system: ["SF Pro Display", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
