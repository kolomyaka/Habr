import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './EditableProfileCard.module.scss';
import { ProfileCard } from 'entities/Profile';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { EditableProfileCardHeader } from './EditableProfileCardHeader/EditableProfileCardHeader';
import { profileActions } from '../model/slice/ProfileSlice';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';

interface EditableProfileCardProps {
    className?: string
}

export const EditableProfileCard = ({ className }: EditableProfileCardProps) => {
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onInputChangeHandler = useCallback((value: string, name: string) => {
        switch (name) {
        case 'age':
            dispatch(profileActions.updateProfile({ [name]: Number(value) }));
            break;
        default:
            console.log('name:', name, 'value:',value);
            dispatch(profileActions.updateProfile({ [name]: value }));
        }
    }, [dispatch]);

    return (
        <div className={classNames(cls.editableProfileCard, {}, [className])}>
            <EditableProfileCardHeader />
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


