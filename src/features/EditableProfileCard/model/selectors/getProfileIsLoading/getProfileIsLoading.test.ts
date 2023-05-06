import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileIsLoading } from '../../selectors/getProfileIsLoading/getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            }
        };
        expect(getProfileIsLoading(state as StateSchema)).toBe(true);
    });
    '';
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});