
import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }) {

    // Store the current theme
    const [theme, setTheme] = useState("light");

    // Apply the selected theme to the HTML document
    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            theme
        );
    }, [theme]);

    // Function for switching themes
    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
        );
    };

    return (
        <ThemeContext.Provider
            value={{ theme, toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
