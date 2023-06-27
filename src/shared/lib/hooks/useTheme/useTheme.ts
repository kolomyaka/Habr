import { useCallback, useContext, useEffect } from 'react';

import { Theme } from '../../../const/theme';
import { ThemeContext, ThemeContextProps } from '../../../context/ThemeContext';

interface useThemeResult {
    toggleTheme: (saveAction: (theme: Theme) => void) => void;
    theme: Theme;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme }: ThemeContextProps = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

        setTheme?.(newTheme);
        saveAction?.(newTheme);
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
        toggleTheme,
    };
}
