import { useEffect, useState } from "react"

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "classic";
    });

    const themes = {
        elegance: "Elegance",
        dark: "Dark",
        classic: "Classic"
    }

    const changeTheme = (themeName) => setTheme(themeName);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', theme);
            //console.log(document.documentElement);
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    return {changeTheme, themes}
}