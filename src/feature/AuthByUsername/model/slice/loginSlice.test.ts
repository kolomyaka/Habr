import { LoginSchema } from 'feature/AuthByUsername';
import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from 'feature/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        // Создаем подобие нашего стейта, которое будем передавать в редюсер
        const state: DeepPartial<LoginSchema> = { username: '' };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('qwe'))
        ).toEqual({ username: 'qwe' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '' };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123'))
        ).toEqual({ password: '123' });
    });
});