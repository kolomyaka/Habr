import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ListBox } from 'shared/ui/ListBox/ListBox';

import { Country } from '../../model/types/country';

interface CountrySelectOptions {
    className?: string;
    readonly?: boolean;
    value?: Country;
    onChange?: (value: Country, name: string) => void
}

const countryOptions = Object.entries(Country).map((val) => ({ value: val[0], content: val[1] }));

export const CountrySelect = memo((props: CountrySelectOptions) => {
    const { t } = useTranslation();
    const {
        className,
        readonly,
        value,
        onChange
    } = props;

    const onChangeHandler = useCallback((value: Country, name) => {
        onChange?.(value as Country, name);
    }, [onChange]);


    return (
        <ListBox
            className={className}
            name={'country'}
            label={t('Страна')}
            items={countryOptions}
            readonly={readonly}
            value={value}
            onChange={onChangeHandler}
        />
    );
});


