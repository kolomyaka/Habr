import type { StateSchema } from 'app/providers/StoreProvider';

import { getCounter } from './getCounter';

describe('getCounter selector', () => {
    test('should return counter', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10
            }
        };
        expect(getCounter(state as StateSchema)).toEqual( { value: 10 });
    });
});
