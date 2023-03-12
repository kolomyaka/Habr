import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        alt,
        size
    } = props;

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 150,
            height: size || 150
        };
    }, [size]);

    return (
        <img
            style={styles}
            src={src}
            className={classNames(cls.avatar, {}, [className])}
            alt={alt}
        />
    );
};


