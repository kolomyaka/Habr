import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from '../../selectors/getProfileError/getProfileError';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'true'
            }
        };
        expect(getProfileError(state as StateSchema)).toBe('true');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});