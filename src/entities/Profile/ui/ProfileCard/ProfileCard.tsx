import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib';
import { Avatar } from '@/shared/ui';
import { Card } from '@/shared/ui';
import { Input } from '@/shared/ui';
import { Skeleton } from '@/shared/ui';
import { VStack } from '@/shared/ui';
import { Text, TextAlign, TextTheme } from '@/shared/ui';

import { Profile } from '../../model/types/profile';

import cls from './ProfileCard.module.scss';

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

    const { t } = useTranslation('profile' );

    if (isLoading) {
        return (
            <VStack max className={classNames(cls.profileCard, {}, [className, cls.loader])}>
                <Skeleton width={'100%'} height={550} />
            </VStack>
        );
    }

    if (error) {
        return (
            <VStack max className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке данных профиля')}
                    description={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </VStack>
        );
    }

    return (
        <Card>
            <VStack max gap={16} className={cls.profileCard}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}
                <Input
                    name={'first_name'}
                    label={t('Имя', { ns: 'profile' })}
                    value={data?.first_name}
                    className={cls.input}
                    readonly={readonly}
                    data-testid={'ProfileCard.firstName'}
                    onChange={onInputChangeHandler}
                />
                <Input
                    name={'last_name'}
                    label={t('Фамилия')}
                    value={data?.last_name}
                    className={cls.input}
                    readonly={readonly}
                    data-testid={'ProfileCard.lastName'}
                    onChange={onInputChangeHandler}
                />
                <Input
                    name={'username'}
                    label={t('Логин' )}
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
            </VStack>
        </Card>
    );
});


