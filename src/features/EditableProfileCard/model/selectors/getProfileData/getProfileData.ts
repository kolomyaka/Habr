import { buildSelector } from '@/shared/lib/store';

export const [useProfileData, getProfileData] = buildSelector(
    (state) => state.profile?.data,
);
