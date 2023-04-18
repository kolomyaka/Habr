import { ButtonHTMLAttributes, forwardRef, memo, ReactNode } from 'react';

import { classNames, Mods } from '../../lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    BACKGROUND_LIGHT = 'backgroundLight',
}

export enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    round?: boolean;
    disabled?: boolean;
    size?: ButtonSize;
    children?: ReactNode;
}

type Ref = HTMLButtonElement;

export const Button = memo(forwardRef<Ref, ButtonProps>((props:ButtonProps, ref) => {

    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled,
        round,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.round]: round,
        [cls[theme]]: true,
        [cls[size]]: true,
    };

    return (
        <button
            ref={ref}
            className={classNames(cls.button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
}));


