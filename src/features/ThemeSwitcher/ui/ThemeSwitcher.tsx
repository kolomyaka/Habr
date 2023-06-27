import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { saveJsonSettings } from '@/entities/User';

import IconMoon from '@/shared/assets/icons/icon-moon.svg';
import IconSun from '@/shared/assets/icons/icon-sun.svg';
import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch, useTheme } from '@/shared/lib/hooks';
import { AppCheckbox } from '@/shared/ui';

import cls from './ThemeSwitcher.module.scss';
interface ThemeSwitcherProps {
    className?: string;
    short?: boolean;
}

export const ThemeSwitcher = memo(
    ({ className, short }: ThemeSwitcherProps) => {
        const { theme, toggleTheme } = useTheme();
        const { t } = useTranslation();
        const dispatch = useAppDispatch();

        const onToggleHandler = useCallback(() => {
            toggleTheme((newTheme) => {
                dispatch(saveJsonSettings({ theme: newTheme }));
            });
        }, [dispatch, toggleTheme]);

        return (
            <div className={classNames(cls.themeSwitcher, {}, [className])}>
                <AppCheckbox
                    short={short}
                    checked={theme === Theme.DARK}
                    label={
                        theme === Theme.LIGHT ? (
                            <>
                                <IconSun className={cls.themeIcon} />
                                <span className={cls.themeName}>
                                    {t('Светлая')}
                                </span>
                            </>
                        ) : (
                            <>
                                <IconMoon className={cls.themeIcon} />
                                <span className={cls.themeName}>
                                    {t('Темная')}
                                </span>
                            </>
                        )
                    }
                    className={short ? cls.short : ''}
                    onChange={onToggleHandler}
                />
            </div>
        );
    },
);
