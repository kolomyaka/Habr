import { memo } from 'react';

import { classNames, Mods } from '../../lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right'
}

export enum TextSize {
    M = 'sizeM',
    L = 'sizeL'

}

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {

    const {
        className,
        title,
        theme = TextTheme.PRIMARY,
        description,
        align = TextAlign.LEFT,
        size = TextSize.M
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[size]]: true
    };

    return (
        <div className={classNames(cls.text, mods, [className, cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {description && <p className={cls.description}>{description}</p>}
        </div>
    );
});


