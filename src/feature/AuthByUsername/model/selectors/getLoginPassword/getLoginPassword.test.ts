import { getLoginPassword } from './getLoginPassword';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginIsLoading.test', () => {
    test('should return qwerty', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'qwerty'
            }
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('qwerty');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});