import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react';
import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Button } from '../Button/Button';
import { HStack } from '../Stack/HStack/HStack';

import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItem[];
    className?: string;
    value?: T;
    defaultValue?: string | null;
    readonly?: boolean;
    name: string;
    label?: string | null;
    onChange: (value: T, name: string) => void
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        className,
        items,
        readonly = false,
        value = undefined,
        defaultValue,
        name,
        label,
        onChange
    } = props;

    const { x, y, strategy, refs } = useFloating({
        placement: 'bottom-start',
        middleware: [offset(10), flip(), shift()],
        whileElementsMounted: autoUpdate,
    });

    const onChangeHandler = (value: T) => {
        onChange(value, name);
    };

    return (
        <HStack align={'center'} gap={4} max>
            <span
                className={classNames(cls.label, { [cls.readonly]: readonly })}>{label + '>'}</span>
            <HListBox<'div', T | undefined>
                as={'div'}
                disabled={readonly}
                ref={refs.setReference}
                className={classNames(cls.listBox, { [cls.readonly]: readonly }, [className])}
                value={value}
                onChange={onChangeHandler}
            >
                <HListBox.Button
                    as={Fragment}
                >
                    <Button>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options
                    className={cls.options}
                    ref={refs.setFloating}
                    style={{
                        position: strategy,
                        top: y ?? 35,
                        left: x ?? 0,
                        width: 'max-content',
                    }}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ selected, active, disabled }) => (
                                <li
                                    className={classNames(cls.option, {
                                        [cls.active]: active,
                                        [cls.selected]: selected,
                                        [cls.disabled]: disabled
                                    })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>

    );
}