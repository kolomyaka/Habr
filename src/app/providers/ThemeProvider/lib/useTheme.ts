import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps } from './ThemeContext';
import { useContext } from 'react';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme }: ThemeContextProps = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme(newTheme);
    };

    return { theme, toggleTheme };
}