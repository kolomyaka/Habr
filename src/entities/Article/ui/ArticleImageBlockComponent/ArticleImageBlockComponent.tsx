import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';
import { Text, TextAlign } from 'shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
        <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.image} />
            {block.title&& (
                <Text
                    description={block.title}
                    align={TextAlign.CENTER}
                />
            )}
        </div>
    );
};


