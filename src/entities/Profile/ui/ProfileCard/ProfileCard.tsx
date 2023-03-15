import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    readonly?: boolean;
    isLoading?: boolean;
    onInputChangeHandler?: (value: string, name: string) => void
}

// entities - чаще всего просто переиспользуемый компонент, который берет данные из вне,
// Поэтому логику получения данных и т.д мы вынесли на уровень выше
export const ProfileCard = memo((props: ProfileCardProps) => {

    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onInputChangeHandler
    } = props;

    const { t } = useTranslation(['profile','translation'] );

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.loader])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке данных профиля')}
                    description={t('Попробуйте обновить страницу', { ns: 'translation' })}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}
                <Input
                    name={'first_name'}
                    label={t('Имя')}
                    value={data?.first_name}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onInputChangeHandler}
                />
                <Input
                    name={'last_name'}
                    label={t('Фамилия')}
                    value={data?.last_name}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onInputChangeHandler}
                />
                <Input
                    name={'username'}
                    label={t('Логин')}
                    value={data?.username}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onInputChangeHandler}
                />
                <Input
                    name={'age'}
                    label={t('Возраст')}
                    value={data?.age}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onInputChangeHandler}
                />
                <Input
                    name={'city'}
                    label={t('Город')}
                    value={data?.city}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onInputChangeHandler}
                />
                <Input
                    name={'avatar'}
                    label={t('Аватар')}
                    value={data?.avatar}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onInputChangeHandler}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    readonly={readonly}
                    onChange={onInputChangeHandler}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    readonly={readonly}
                    onChange={onInputChangeHandler}
                />
            </div>
        </div>
    );
});

