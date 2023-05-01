import React, { memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './Icon.module.scss';

interface IconProps extends React.SVGAttributes<SVGElement>{
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        ...otherProps
    } = props;


    return (
        <Svg
            className={classNames(cls.icon, {}, [className])}
            {...otherProps}
        />
    );
});


