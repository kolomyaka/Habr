import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './EditableProfileCard.module.scss';
import { ProfileCard, ValidateProfileError } from 'entities/Profile';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { EditableProfileCardHeader } from './EditableProfileCardHeader/EditableProfileCardHeader';
import { profileActions } from '../model/slice/profileSlice';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';
import {
    getProfileValidateErrors
} from 'feature/EditableProfileCard/model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';


interface EditableProfileCardProps {
    className?: string
}

export const EditableProfileCard = ({ className }: EditableProfileCardProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_USERNAME]: t('Логин обязателен')
    };


    const onInputChangeHandler = useCallback((value: string, name: string) => {
        switch (name) {
        case 'age':
            if (!/[^\d]/g.test(value || '')) {
                dispatch(profileActions.updateProfile({ [name]: Number(value) }));
            }
            break;
        default:
            dispatch(profileActions.updateProfile({ [name]: value }));
        }
    }, [dispatch]);

    return (
        <div className={classNames(cls.editableProfileCard, {}, [className])}>
            <EditableProfileCardHeader />
            {validateErrors?.length && validateErrors.map(err => (
                <Text
                    key={err}
                    theme={TextTheme.ERROR}
                    description={validateErrorTranslates[err]}
                />
            ))}
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onInputChangeHandler={onInputChangeHandler}
            />
        </div>
    );
};


