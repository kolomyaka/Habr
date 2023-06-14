import { forwardRef, memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '../../lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
    OUTLINE = 'outline',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

type Ref = HTMLAnchorElement;

export const AppLink = memo(
    forwardRef<Ref, AppLinkProps>((props: AppLinkProps, ref) => {
        const {
            to,
            className,
            children,
            theme = AppLinkTheme.PRIMARY,
            ...otherProps
        } = props;

        return (
            <Link
                to={to}
                ref={ref}
                className={classNames(cls.appLink, {}, [className, cls[theme]])}
                {...otherProps}
            >
                {children}
            </Link>
        );
    }),
);
