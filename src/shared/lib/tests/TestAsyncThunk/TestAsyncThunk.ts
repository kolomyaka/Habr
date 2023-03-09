import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

// Типизируем экшн-креатор (next AC)
// 1. То что возвращает AC
// 2. Аргументы которые принимет наш AC
// 3. Тип данных, которые будут в случае ошибки

type ActionCreatorType<Return, Arg, RejectedValue> =
    (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

// Создаем класс, который будем использовать при тестировании асинхронных thunk
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        // При инициализации сохраняем поля нашего класса
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    // Метод, который вызывает нашу санку
    async callThunk(arg: Arg) {
        // Получаем наш action, который возвращам санка
        const action = this.actionCreator(arg);
        // Вызывываем полученный action
        const result = await action(this.dispatch, this.getState, undefined);
        return result;
    }

}