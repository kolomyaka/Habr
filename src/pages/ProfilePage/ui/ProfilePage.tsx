import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EditableProfileCard, profileReducer } from 'feature/EditableProfileCard';
import { useEffect } from 'react';
import { fetchProfileData } from 'feature/EditableProfileCard/model/services/fetchProfileData/fetchProfileData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <EditableProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;


