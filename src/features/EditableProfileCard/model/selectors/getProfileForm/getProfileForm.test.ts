import type { StateSchema } from '@/app/providers/StoreProvider';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

describe('getProfileForm.test', () => {
    test('should return form', () => {
        const data = {
            username: 'Kolomyaka',
            first_name: 'Nikita',
            last_name: 'Kolomoycev',
            age: 22,
            country: Country.Russia,
            currency: Currency.RUB,
            city: 'Saint-Petersburg',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            }
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});