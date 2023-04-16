import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'shared/ui/Button/Button';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid={'value-title'}>{counterValue}</h1>
            <Button onClick={increment} data-testid={'increment-button'}>
                {t('Увеличить')}
            </Button>
            <Button onClick={decrement} data-testid={'decrement-button'}>
                {t('Уменьшить')}
            </Button>
        </div>
    );
};


