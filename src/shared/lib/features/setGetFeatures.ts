import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags;

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags) => {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
};

export const getFeatureFlag = (flag: keyof FeatureFlags) => {
    if (!featureFlags) return undefined;

    return featureFlags[flag];
};
