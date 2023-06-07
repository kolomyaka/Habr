import { CSSProperties, useMemo } from 'react';

import { classNames } from '@/shared/lib';

import UserIcon from '../../assets/icons/userIcon.svg';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Skeleton/Skeleton';

import cls from './Avatar.module.scss';

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
        size = 150
    } = props;

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size
        };
    }, [size]);

    const fallback = <Skeleton width={size} height={size} border={'50%'} />;
    const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;

    return (
        <AppImage
            style={styles}
            src={src}
            fallback={fallback}
            className={classNames(cls.avatar, {}, [className])}
            alt={alt}
            errorFallback={errorFallback}
        />
    );
};


