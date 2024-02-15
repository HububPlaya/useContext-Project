import { createContext, useContext } from "react";

export const UserContext = createContext({
    themeMode: "light",
    darktheme: () => {},
    lightTheme: () => {}

    
})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeProvider)
}