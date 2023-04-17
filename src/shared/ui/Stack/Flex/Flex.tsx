import { memo, ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

type FlexAlign = 'center' | 'start' | 'end';

type FlexJustify = 'center' | 'between' | 'start' | 'end'

type FlexGap = 4 | 8 | 12 | 16

type FlexDirection = 'row' | 'column'

export interface FlexProps {
    align?: FlexAlign;
    justify?: FlexJustify;
    gap?: FlexGap;
    direction?: FlexDirection;
    className?: string;
    children?: ReactNode;
}

const justifyClasses: Record<FlexJustify, string> = {
    center: cls.jusityCenter,
    between: cls.jusifyBetween,
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
};

export const Flex = memo((props: FlexProps) => {

    const {
        className,
        align = 'start',
        gap = 8,
        justify = 'start',
        direction = 'row',
        children
    } = props;

    console.log(cls, gapClasses);

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap]
    ];

    return (
        <div className={classNames(cls.flex, {}, classes)}>
            {children}
        </div>
    );
});


