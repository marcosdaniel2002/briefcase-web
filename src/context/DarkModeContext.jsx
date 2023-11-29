import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [theme, setTheme] = useLocalStorageState("system", "theme");

  function nextTheme() {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  }

  useEffect(
    function () {
      document.documentElement.className = "";
      if (theme === "system") {
        const isDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        document.documentElement.classList.add(
          `${isDark ? "dark" : "light"}-mode`
        );
      } else {
        document.documentElement.classList.add(`${theme}-mode`);
      }
    },
    [theme]
  );

  return (
    <DarkModeContext.Provider value={{ theme, nextTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider!");
  return context;
}

export { DarkModeProvider, useDarkMode };
