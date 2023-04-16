import { memo, useCallback } from 'react';

import CopyIcon from '../../assets/icons/copy-icon.svg';
import { classNames } from '../../lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';

import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    children: string;
}

export const Code = memo(({ className, children }: CodeProps) => {

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(children);
    }, [children]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button onClick={onCopy} theme={ButtonTheme.CLEAR} className={cls.copyBtn}>
                <CopyIcon />
            </Button>
            <code>
                {children}
            </code>
        </pre>
    );
});


