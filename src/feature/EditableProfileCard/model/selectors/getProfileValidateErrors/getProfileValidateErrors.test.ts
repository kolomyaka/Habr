import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileValidateErrors } from '../../selectors/getProfileValidateErrors/getProfileValidateErrors';
import { ValidateProfileError } from '../../types/EditableProfileCard';

describe('getProfileValidateErrors.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.INCORRECT_USERNAME,
                    ValidateProfileError.INCORRECT_AGE
                ]
            }
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_USERNAME,
            ValidateProfileError.INCORRECT_AGE
        ]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});