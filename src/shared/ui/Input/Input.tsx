import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { InputHTMLAttributes, memo, SyntheticEvent, useState } from 'react';

// Omit - Первым параметром принимает тип, который забираем,
// Вторым параметром исключаем типы, которые хотим исключить
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

// Если делать extends от обычного HTMLInput, то ТС будем ругаться, т.к переопределяем
// Дефолтные типы инпута
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    type?: string;
    label?: string;
    autoFocus?: boolean;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {

    const {
        className,
        value,
        label,
        onChange,
        autoFocus,
        type = 'text',
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState<number | null>(0);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Чтобы не делать if () {}
        // Можем воспользоваться конструкцией для вызова функции func?.()
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
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
        <label className={classNames(cls.inputWrapper, {}, [className])}>
            {
                label && <p className={cls.label}>{`${label}>`}</p>
            }
            <div className={cls.caretWrapper}>
                <input
                    autoFocus={autoFocus}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    onSelect={onSelectHandler}
                    {...otherProps}
                />
                {
                    isFocused && (
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


