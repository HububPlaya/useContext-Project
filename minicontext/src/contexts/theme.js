import { createContext, useContext } from "react";

export const themeContext = createContext({
    themeMode: "light",
    darktheme: () => {},
    lightTheme: () => {}

    
})
