import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { ChangeEvent, memo, useMemo } from 'react';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[]
    value?: string;
    name?: string;
    readonly?: boolean;
    onChange?: (value: string, name: string) => void;
}

export const Select = memo((props: SelectProps) => {

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
        onChange?.(e.target.value, e.target.name);
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
});


