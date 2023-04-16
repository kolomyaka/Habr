import React, { memo } from 'react';

import { classNames } from '../../lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const Icon = memo(({ className, Svg }: IconProps) => {

    return (
        <Svg className={classNames(cls.icon, {}, [className])} />
    );
});


