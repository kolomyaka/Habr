import { Profile } from 'entities/Profile';

import { ValidateProfileError } from '../../types/EditableProfileCard';

export const validateProfileData = (profile?: Profile) => {

    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        first_name,
        last_name,
        age,
        username,
        country
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first_name || !last_name) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!username) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};