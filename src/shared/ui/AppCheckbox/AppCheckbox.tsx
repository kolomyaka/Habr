import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppCheckbox.module.scss';
import { InputHTMLAttributes, ReactNode } from 'react';


interface AppCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string | ReactNode;
    checked?: boolean;
    short?: boolean;
    onChange?: () => void;
}

export const AppCheckbox = (props : AppCheckboxProps) => {

    const {
        className,
        label,
        checked,
        short,
        onChange,
    } = props;

    const onChangeHandler = () => {
        onChange?.();
    };

    console.log(className);

    return (
        <label
            className={classNames(cls.appCheckbox, { [cls.short]: short }, [className])}
        >
            {
                label && <p className={cls.label}>{label}</p>
            }
            <div className={cls.switcher}>
                <input onChange={onChangeHandler} checked={checked} type="checkbox" />
                <span className={cls.slider}></span>
            </div>
        </label>
    );
};


