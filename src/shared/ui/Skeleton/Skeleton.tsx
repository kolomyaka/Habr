import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';
import { CSSProperties, memo } from 'react';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string | number;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        border,
        height,
        width
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border
    };

    return (
        <div
            className={classNames(cls.skeleton, {}, [className])}
            style={styles}
        >
        </div>
    );
});


