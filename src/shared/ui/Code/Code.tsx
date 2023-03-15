import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy-icon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

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


