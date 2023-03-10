import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
    theme?: TextTheme
}

export const Text = memo((props: TextProps) => {

    const {
        className,
        title,
        theme = TextTheme.PRIMARY,
        description
    } = props;

    return (
        <div className={classNames(cls.text, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {description && <p className={cls.description}>{description}</p>}
        </div>
    );
});


