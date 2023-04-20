import { memo, ReactNode } from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

type FlexAlign = 'center' | 'start' | 'end';

type FlexJustify = 'center' | 'between' | 'start' | 'end'

type FlexGap = 4 | 8 | 12 | 16 | 20 | 24

type FlexDirection = 'row' | 'column'

export interface FlexProps {
    align?: FlexAlign;
    justify?: FlexJustify;
    gap?: FlexGap;
    direction?: FlexDirection;
    className?: string;
    children?: ReactNode;
    max?: boolean;
}

const justifyClasses: Record<FlexJustify, string> = {
    center: cls.jusityCenter,
    between: cls.justifyBetween,
    start: cls.justifyStart,
    end: cls.justifyEnd
};

const alignClasses: Record<FlexAlign, string> = {
    center: cls.alignCenter,
    start: cls.alignStart,
    end: cls.alignEnd
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    12: cls.gap12,
    16: cls.gap16,
    20: cls.gap20,
    24: cls.gap24
};

export const Flex = memo((props: FlexProps) => {

    const {
        className,
        align = 'start',
        gap = 8,
        justify = 'start',
        direction = 'row',
        max,
        children
    } = props;

    const mods: Mods = {
        [cls.max]: max
    };

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap]
    ];

    return (
        <div className={classNames(cls.flex, mods, classes)}>
            {children}
        </div>
    );
});


