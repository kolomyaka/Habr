import { memo } from 'react';

import { classNames, Mods } from '../../lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

export enum TextSize {
    M = 'sizeM',
    L = 'sizeL',
}

interface TextProps {
    className?: string;
    title?: string | null;
    description?: string | null;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;

    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        theme = TextTheme.PRIMARY,
        description,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = '',
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.text, mods, [className, cls[align]])}>
            {title && (
                <p className={cls.title} data-testid={`${dataTestId}.Title`}>
                    {title}
                </p>
            )}
            {description && (
                <p
                    className={cls.description}
                    data-testid={`${dataTestId}.Description`}
                >
                    {description}
                </p>
            )}
        </div>
    );
});
