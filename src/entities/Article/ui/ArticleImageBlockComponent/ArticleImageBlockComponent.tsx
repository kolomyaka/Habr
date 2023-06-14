import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text/Text';

import { ArticleImageBlock } from '../../model/types/article';

import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({
    className,
    block,
}: ArticleImageBlockComponentProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.image} />
            {block.title && (
                <Text description={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
};
