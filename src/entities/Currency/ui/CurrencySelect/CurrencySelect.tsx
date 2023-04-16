import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui/Select/Select';

import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    readonly?: boolean;
    value?: Currency;
    onChange?: (value: Currency, name: string) => void
}

const currencyOptions = Object.entries(Currency).map((val) => ({ value: val[0], content: val[1] }));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation();
    const {
        className,
        readonly,
        value,
        onChange
    } = props;

    const onChangeHandler = useCallback((value: string, name: string) => {
        onChange?.(value as Currency, name);
    }, [onChange]);


    return (
        <Select
            name={'currency'}
            label={t('Валюта')}
            options={currencyOptions}
            readonly={readonly}
            value={value}
            onChange={onChangeHandler}
            className={className}
        />
    );
});


