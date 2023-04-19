import { ChangeEvent, useMemo } from 'react';

import { classNames, Mods } from '../../lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value:T;
    content: string;
}

interface SelectProps<T extends string>{
    className?: string;
    label?: string | null;
    options: SelectOption<T>[]
    value?: T;
    name?: string;
    readonly?: boolean;
    onChange?: (value: T, name: string) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {

    const {
        className,
        label,
        options,
        value,
        readonly,
        name,
        onChange
    } = props;

    const mods: Mods = {
        [cls.readonly]: readonly
    };

    const optionsList = useMemo(() => {
        return options?.map(opt => (
            <option
                className={cls.option}
                key={opt.value}
                value={opt.value}
            >
                {opt.content}
            </option>
        ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log('val',e.target.value, 'name',e.target.name);
        onChange?.(e.target.value as T, e.target.name);
    };

    return (
        <label className={classNames(cls.wrapper, mods, [className])}>
            {label && (
                <p className={cls.label}>{label + '>'}</p>
            )}
            <select
                name={name}
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </label>
    );
};


