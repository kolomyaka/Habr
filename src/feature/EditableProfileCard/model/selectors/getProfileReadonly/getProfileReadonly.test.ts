import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileReadonly } from '../../selectors/getProfileReadonly/getProfileReadonly';

describe('getProfileReadonly.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true
            }
        };
        expect(getProfileReadonly(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});