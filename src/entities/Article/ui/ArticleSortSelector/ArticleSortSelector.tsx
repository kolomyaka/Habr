import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { OrderType } from 'shared/types/types';
import { Select, SelectOption } from 'shared/ui/Select/Select';

import { ArticleSortField } from '../../model/types/article';

import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    order: OrderType;
    sortField: ArticleSortField;
    onChangeOrder: (order: OrderType) => void;
    onChangeSortField: (sortField: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        order,
        sortField,
        onChangeOrder,
        onChangeSortField
    } = props;

    const { t } = useTranslation('articles');
    // Сохраняем результат полученый из мемо. Коллбек возвращает массив.
    const sortOrderOptions = useMemo<SelectOption<OrderType>[]>(() => [
        {
            value: 'asc',
            content: t('Возрастанию')
        },
        {
            value: 'desc',
            content: t('Убыванию')
        }
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('Дате создания')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('Просмотрам')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('Названию')
        }
    ], [t]);

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            <Select
                label={t('Сортировать ПО')}
                options={sortOrderOptions}
                value={order}
                onChange={onChangeOrder}
            />
            <Select
                label={t('По')}
                options={sortFieldOptions}
                value={sortField}
                onChange={onChangeSortField}
            />
        </div>
    );
});


