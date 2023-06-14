import { useCallback } from 'react';

import { classNames } from '../../lib/classNames/classNames';
import { Card } from '../Card/Card';
import { Text } from '../Text/Text';

import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
    value: T;
    content: string;
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, onTabClick } = props;

    const onTabClickHandler = useCallback(
        (tab: TabItem<T>) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    data-testid={`ArticleTab.${tab.value}`}
                    key={tab.value}
                    className={classNames(cls.tabItem, {
                        [cls.selected]: tab.value === value,
                    })}
                    onClick={onTabClickHandler(tab)}
                >
                    <Text description={tab.content} />
                </Card>
            ))}
        </div>
    );
};
