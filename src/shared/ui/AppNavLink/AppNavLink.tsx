import { memo } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import { classNames } from '../../lib/classNames/classNames';

import cls from './AppNavLink.module.scss';

export enum AppNavLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppNavLinkProps extends NavLinkProps {
    className?: string;
    theme?: AppNavLinkTheme;
}

export const AppNavLink = memo((props: AppNavLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppNavLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppNavLink, { [cls['active']]: isActive }, [
                    className,
                    cls[theme],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
