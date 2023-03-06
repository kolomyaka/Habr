import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { AppCheckbox } from 'shared/ui/AppCheckbox/AppCheckbox';
import cls from './ThemeSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import IconMoon from 'shared/assets/icons/icon-moon.svg';
import IconSun from 'shared/assets/icons/icon-sun.svg';
interface ThemeSwitcherProps {
    className?: string;
    short?: boolean;
}

export const ThemeSwitcher = ({ className,short }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.themeSwitcher,{}, [className])}>
            <AppCheckbox
                short={short}
                checked={theme === Theme.DARK}
                label={theme === Theme.LIGHT
                    ? <>
                        <IconSun className={cls.themeIcon} />
                        <span className={cls.themeName}>{t('Светлая')}</span>
                    </>
                    : <>
                        <IconMoon className={cls.themeIcon} />
                        <span className={cls.themeName}>{t('Темная')}</span>
                    </>}
                className={short ? cls.short : ''}
                onChange={toggleTheme}
            />
        </div>
    );
};


