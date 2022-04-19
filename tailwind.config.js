module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 6s linear infinite;",
      },
      fontFamily: {
        title: ["Russo One"],
        description: ["Montserrat"],
      },
      fontSize: {
        hero: "4.5rem",
        title: "4rem",
        subtitle: "1.5rem",
        description: "1.1255rem",
        card: "1rem",
      },
    },
  },
  plugins: [],
};
