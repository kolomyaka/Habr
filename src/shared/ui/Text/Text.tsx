import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right'
}

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {

    const {
        className,
        title,
        theme = TextTheme.PRIMARY,
        description,
        align = TextAlign.LEFT
    } = props;

    return (
        <div className={classNames(cls.text, { [cls[theme]]: true }, [className, cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {description && <p className={cls.description}>{description}</p>}
        </div>
    );
});


