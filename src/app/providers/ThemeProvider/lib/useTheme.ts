import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps } from './ThemeContext';
import { useCallback, useContext, useEffect } from 'react';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme }: ThemeContextProps = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme?.(newTheme);
    };

    const setThemeClass = useCallback(() => {
        const root = document.getElementById('root');
        if (!root) return;

        if (theme === Theme.LIGHT) {
            root.classList.add(Theme.LIGHT);
            root.classList.remove(Theme.DARK);
        } else {
            root.classList.add(Theme.DARK);
            root.classList.remove(Theme.LIGHT);
        }
    }, [theme]);

    useEffect(() => {
        setThemeClass();
    }, [setThemeClass, theme]);

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme
    };
}