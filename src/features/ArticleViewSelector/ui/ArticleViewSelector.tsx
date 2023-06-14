import { memo } from 'react';

import { ArticleView } from '@/entities/Article';

import BigIcon from '@/shared/assets/icons/big_view.svg';
import SmallIcon from '@/shared/assets/icons/small_view.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme, Icon } from '@/shared/ui';

import cls from './ArticleViewSelector.module.scss';

const viewTypes = [
    {
        view: 'small',
        icon: SmallIcon,
    },
    {
        view: 'big',
        icon: BigIcon,
    },
];

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onChangeView: (view: ArticleView) => void;
}

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onChangeView } = props;

    const onClick = (viewType: string) => () => {
        onChangeView?.(viewType as ArticleView);
    };

    return (
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    key={viewType.view}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', {
                            [cls.notSelected]: viewType.view !== view,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
});
