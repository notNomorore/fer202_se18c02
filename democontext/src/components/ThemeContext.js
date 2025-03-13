import React, { createContext, useState } from "react";

export const themes = {
  light: {
    foreground: "#181818",
    background: "#EEEEEE",
  },
  cyan: {
    foreground: "#181818",
    background: "#74DDF7",
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.cyan : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
