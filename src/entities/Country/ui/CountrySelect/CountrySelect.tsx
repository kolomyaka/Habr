import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

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

    const onChangeHandler = useCallback((value: string, name: string) => {
        onChange?.(value as Country, name);
    }, [onChange]);


    return (
        <Select
            name={'country'}
            label={t('Страна')}
            options={countryOptions}
            readonly={readonly}
            value={value}
            onChange={onChangeHandler}
            className={className}
        />
    );
});


