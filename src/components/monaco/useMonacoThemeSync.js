import { useEffect, useState } from "react";

/**
 * Reads <html data-theme="dark|light"> and maps to Monaco themes.
 * Returns "vs-dark" or "light".
 */
export default function useMonacoThemeSync() {
    const getTheme = () =>
        document.documentElement.getAttribute("data-theme") === "dark"
            ? "vs-dark"
            : "light";

    const [theme, setTheme] = useState(getTheme);

    useEffect(() => {
        const el = document.documentElement;
        const observer = new MutationObserver(() => setTheme(getTheme()));
        observer.observe(el, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });
        return () => observer.disconnect();
    }, []);

    return theme;
}
