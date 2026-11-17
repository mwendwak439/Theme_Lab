
import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import ThemeContext from "../context/ThemeContext";

export default function ThemeToggle() {

    // Access theme information from Context
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
        >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}

            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    );
}
