import { CounterSchema } from '../types/counterSchema';

import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    test('Increment', () => {

        // Создаем стейт отдельного слайса и передаем его
        const state: CounterSchema = { value: 10 };
        expect(
            // Редюсер принимает свой стейт и экшн, который мы хотим протестировать
            counterReducer(state as CounterSchema, counterActions.increment()
            )
            // Ожидаем как раз получить результат, который будет после выполнения экшна
        ).toEqual({ value: 11 });
    });

    test('Decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state as CounterSchema, counterActions.decrement()
            )
        ).toEqual({ value: 9 });
    });

    // Так же лучше проверять случай, если не передаем какой-то initialState
    test('Should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment()
            )
        ).toEqual({ value: 1 });
    });
});