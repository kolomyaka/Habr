import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile';

import { validateProfileData } from './validateProfileData';

const data = {
    id: '1',
    username: 'Kolomyaka',
    first_name: 'Nikita',
    last_name: 'Kolomoycev',
    age: 22,
    country: Country.Russia,
    currency: Currency.RUB,
    city: 'Saint-Petersburg',
};

describe('validateProfileData.test', () => {

    test('Without error', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('With USER_DATA error', async () => {
        const result = validateProfileData({ ...data, last_name: '', first_name: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('With AGE error', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('With USERNAME error', async () => {
        const result = validateProfileData({ ...data, username: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
    });

    test('With COUNTRY error', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('Incorrect all', async () => {
        const result = validateProfileData({  });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USERNAME,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('NO_DATA error', async () => {
        const result = validateProfileData();

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });
});