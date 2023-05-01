import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { ProfileRating } from '@/features/Rating/ProfileRating';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';




interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();

    if (!id) {
        return null;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack max gap={16}>
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;


