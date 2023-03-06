import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppNavLink.module.scss';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { FC } from 'react';

export enum AppNavLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppNavLinkProps extends NavLinkProps{
    className?: string
    theme?: AppNavLinkTheme
}

export const AppNavLink: FC<AppNavLinkProps> = (props: AppNavLinkProps) => {

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
                classNames(cls.AppNavLink, { [cls['active']]: isActive }, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
};


