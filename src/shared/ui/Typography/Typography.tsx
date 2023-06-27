import { memo, ReactNode } from 'react';

import { classNames } from '../../lib/classNames/classNames';

import cls from './Typography.module.scss';

export interface TypographyProps {
    children: ReactNode;
    className?: string;
    as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
    color?: 'dark' | 'gray' | 'green';
    size?: 'xl' | 'l' | 'm' | 's';
    align?: 'center' | 'left' | 'right';
    weight?: 'medium' | 'regular' | 'light';
}

export const Typography = memo((props: TypographyProps) => {
    const {
        className,
        as = 'p',
        color = 'dark',
        size = 'M',
        align = 'left',
        weight = 'regular',
        children,
    } = props;
    const Component = as;

    console.log(cls, size, cls[size]);

    return (
        <Component
            className={classNames(cls.typography, {}, [
                className,
                cls[as],
                cls[color],
                cls[size],
                cls[align],
                cls[weight],
            ])}
        >
            {children}
        </Component>
    );
});
