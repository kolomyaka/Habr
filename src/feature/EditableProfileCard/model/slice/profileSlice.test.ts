import { profileActions, profileReducer } from 'feature/EditableProfileCard';
import { ProfileSchema, ValidateProfileError } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from 'feature/EditableProfileCard/model/services/updateProfileData/updateProfileData';

const data = {
    username: 'Kolomyaka',
    first_name: 'Nikita',
    last_name: 'Kolomoycev',
    age: 22,
    country: Country.Russia,
    currency: Currency.RUB,
    city: 'Saint-Petersburg',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        // Создаем подобие нашего стейта, которое будем передавать в редюсер
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true))
        ).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            form: data,
            data
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { ...data } };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: 'Polomyaka' })
        )).toEqual({
            form: {
                ...data,
                username: 'Polomyaka'
            }
        });
    });
    // Тестирование extra-reducers
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR]
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        )).toEqual({
            validateError: undefined,
            isLoading: true
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '')
        )).toEqual({
            validateError: undefined,
            isLoading: false,
            readonly: true,
            form: data,
            data
        });
    });
});