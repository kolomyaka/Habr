import { StateSchema } from '@/app/providers/StoreProvider';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { getProfileData } from '../../selectors/getProfileData/getProfileData';

describe('getProfileData.test', () => {
    test('should return data', () => {
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
                data: data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
