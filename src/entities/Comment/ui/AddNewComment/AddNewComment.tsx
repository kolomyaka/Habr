import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

import cls from './AddNewComment.module.scss';

interface AddArticleCommentProps {
    className?: string;
    text: string;
    sendCommentHandler: (text: string) => void;
    onChangeCommentHandler: (text: string) => void;
}

export const AddNewComment = memo((props: AddArticleCommentProps) => {
    const { className, text, sendCommentHandler, onChangeCommentHandler } =
        props;

    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const onSendHandler = useCallback(() => {
        sendCommentHandler(text);
    }, [sendCommentHandler, text]);

    return (
        <div
            className={classNames(cls.addArticleComment, {}, [className])}
            data-testid={'AddNewComment'}
        >
            <Avatar src={userData?.avatar} size={50} />
            <div className={cls.commentWrapper}>
                <Input
                    data-testid={'AddNewComment.Input'}
                    onChange={onChangeCommentHandler}
                    value={text}
                    label={t('Введите комментарий')}
                />
            </div>
            <Button
                data-testid={'AddNewComment.Button'}
                theme={ButtonTheme.OUTLINE}
                onClick={onSendHandler}
            >
                {t('Отправить')}
            </Button>
        </div>
    );
});
