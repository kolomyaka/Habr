import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ListBox } from '@/shared/ui/ListBox/ListBox';

import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    readonly?: boolean;
    value?: Currency;
    onChange?: (value: Currency, name: string) => void;
}

const currencyOptions = Object.entries(Currency).map((val) => ({
    value: val[0],
    content: val[1],
}));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation();
    const { readonly, value, onChange } = props;

    const onChangeHandler = useCallback(
        (value: Currency, name: string) => {
            onChange?.(value, name);
        },
        [onChange],
    );

    return (
        <ListBox
            label={t('Валюта')}
            readonly={readonly}
            name={'currency'}
            defaultValue={t('Выберите валюту')}
            onChange={onChangeHandler}
            items={currencyOptions}
            value={value}
        />
    );
});
