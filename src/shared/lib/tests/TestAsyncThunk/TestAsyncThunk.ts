import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

import type { StateSchema } from '@/app/providers/StoreProvider';

// Типизируем экшн-креатор (next AC)
// 1. То что возвращает AC
// 2. Аргументы которые принимет наш AC
// 3. Тип данных, которые будут в случае ошибки

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

// Создаем класс, который будем использовать при тестировании асинхронных thunk
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;
    // Так же добавляем информацию о axios, который будем использовать в extra-парам в санке
    api: jest.MockedFunctionDeep<AxiosStatic>;

    constructor(
        actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
        state?: DeepPartial<StateSchema>,
    ) {
        // При инициализации сохраняем поля нашего класса
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        // Указываем, что такое api
        this.api = mockedAxios;
    }

    // Метод, который вызывает нашу санку
    async callThunk(arg: Arg) {
        // Получаем наш action, который возвращам санка
        const action = this.actionCreator(arg);
        // Вызывываем полученный action
        const result = await action(
            this.dispatch,
            this.getState,
            // И параметром как раз передаем информацию об extra
            { api: this.api },
        );
        return result;
    }
}
