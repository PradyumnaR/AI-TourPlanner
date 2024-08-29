"use client";
import { createContext, useCallback, useContext, useState } from "react";
import { Themes } from "@/consts";

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(Themes.light);

  const changeTheme = useCallback(() => {
    const newTheme = theme === Themes.light ? Themes.dark : Themes.light;
    setTheme(newTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//custom hook
export const useTheme = () => useContext(ThemeContext);
