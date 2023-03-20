import cls from './EditableProfileCardHeader.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'feature/EditableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { profileActions } from 'feature/EditableProfileCard';
import { updateProfileData } from 'feature/EditableProfileCard/model/services/updateProfileData/updateProfileData';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from 'feature/EditableProfileCard/model/selectors/getProfileData/getProfileData';


export const EditableProfileCardHeader = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;


    const onEditHandler = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEditHandler = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveEditHandler = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={cls.header}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <>
                    {
                        readonly
                            ? (
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onEditHandler}
                                >
                                    {t('Редактировать')}
                                </Button>
                            )
                            : (
                                <div className={cls.editProfileBtn}>
                                    <Button
                                        theme={ButtonTheme.BACKGROUND_INVERTED}
                                        onClick={onCancelEditHandler}
                                    >
                                        {t('Отменить')}
                                    </Button>
                                    <Button
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onSaveEditHandler}
                                    >
                                        {t('Сохранить')}
                                    </Button>
                                </div>
                            )
                    }
                </>
            )}
        </div>
    );
};


