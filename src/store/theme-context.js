import { createContext, useState } from "react";

const ThemeContext = createContext({
  //false: lightmode
  //true: darkmode
  theme: false,
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const themeHandler = () => {
    setTheme(!theme);
    console.log("toggled!");
  };

  const context = {
    theme: theme,
    toggleTheme: themeHandler,
  };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
