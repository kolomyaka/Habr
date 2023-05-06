import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { TestAsyncThunk } from '@/shared/lib/tests';

import { ValidateProfileError } from '../../types/EditableProfileCard';

import { updateProfileData } from './updateProfileData';

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

describe('updateProfileData.test', () => {

    test('should return fulfilled request', async () => {

        // Создаем экземпляр нашего класса и передаем санку
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        // Вызываем метод класса, передавая данные для санки и получаем ответ от action'a
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('should return rejected request', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, last_name: '' }
            }
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});