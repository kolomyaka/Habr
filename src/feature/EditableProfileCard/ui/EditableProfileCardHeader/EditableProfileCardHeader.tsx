import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { Text } from 'shared/ui/Text/Text';
import { getUserAuthData } from 'entities/User';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';


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
        <HStack max justify={'between'} align={'center'}>
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
                                <HStack gap={4}>
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
                                </HStack>
                            )
                    }
                </>
            )}
        </HStack>
    );
};


