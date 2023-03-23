import { createContext, useState } from "react";

const ThemeContext = createContext({
  //false: lightmode, true: darkmode
  theme: false,
  toggleTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  //false: lightmode, true: darkmode
  const [theme, setTheme] = useState(false);

  const themeHandler = () => {
    setTheme(!theme);
    console.log("toggled!");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: themeHandler,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
