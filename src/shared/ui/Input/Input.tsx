import { InputHTMLAttributes, memo, SyntheticEvent, useState } from 'react';

import { classNames, Mods } from '@/shared/lib';

import cls from './Input.module.scss';

// Omit - Первым параметром принимает тип, который забираем,
// Вторым параметром исключаем типы, которые хотим исключить
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'name'>

// Если делать extends от обычного HTMLInput, то ТС будем ругаться, т.к переопределяем
// Дефолтные типы инпута
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    type?: string;
    label?: string | null;
    name?: string;
    autoFocus?: boolean;
    readonly?: boolean;
    onChange?: (value: string, name: string) => void;
}

export const Input = memo((props: InputProps) => {

    const {
        className,
        value,
        label,
        readonly,
        name,
        autoFocus,
        type = 'text',
        onChange,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.readonly]: readonly
    };

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState<number | null>(0);

    const isVisibleCaret = isFocused && !readonly;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Чтобы не делать if () {}
        // Можем воспользоваться конструкцией для вызова функции func?.()
        onChange?.(e.target.value, e.target.name);
        if (value) {
            setCaretPosition(value?.toString().length);
        }
    };

    const onFocusHandler = () => {
        setIsFocused(true);
    };

    const onBlurHandler = () => {
        setIsFocused(false);
    };

    const onSelectHandler = (e: SyntheticEvent<HTMLInputElement, Event>) => {
        setCaretPosition(e.currentTarget.selectionStart);
    };

    return (
        <label className={classNames(cls.inputWrapper, mods, [className])}>
            {
                label && <p className={cls.label}>{`${label}>`}</p>
            }
            <div className={cls.caretWrapper}>
                <input
                    name={name}
                    autoFocus={autoFocus}
                    className={cls.input}
                    type={type}
                    value={value}
                    readOnly={readonly}
                    onChange={onChangeHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    onSelect={onSelectHandler}
                    {...otherProps}
                />
                {
                    isVisibleCaret && (
                        <span
                            style={{ left: `${caretPosition}ch` }}
                            className={cls.caret}
                        ></span>
                    )
                }
            </div>
        </label>
    );
});


