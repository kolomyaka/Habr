import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string
}

export const ArticleCodeBlockComponent = ({ className }: ArticleCodeBlockComponentProps) => {
    return (
        <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
        </div>
    );
};


