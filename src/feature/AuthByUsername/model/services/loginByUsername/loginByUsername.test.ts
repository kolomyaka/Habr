import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { User } from 'entities/User/model/types/user';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('getLoginIsLoading.test', () => {

    test('should return fulfilled request', async () => {
        const userData: User = { username: 'admin', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

        // Создаем экземпляр нашего класса и передаем санку
        const thunk = new TestAsyncThunk(loginByUsername);
        // Вызываем метод класса, передавая данные для санки и получаем ответ от action'a
        const result = await thunk.callThunk({ username: 'admin', password: 'qwerty' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.dispatch).toBeCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('should return rejected request', async () => {
        const userData: User = { username: 'admin', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'admin', password: 'qwerty' });

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.payload).toBe('Invalid username or password');
    });




});