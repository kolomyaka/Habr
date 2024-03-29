import { memo, useState } from 'react';

import StarIcon from '@/shared/assets/icons/starIcon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Icon } from '../../../Icon/Icon';

import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    size?: number;
    selectedStars?: number;
    onSelect?: (starsCount: number) => void;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, selectedStars = 0, size = 30, onSelect } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onEnter = (starCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starCount: number) => () => {
        if (!isSelected) {
            setIsSelected(true);
            setCurrentStarsCount(starCount);
            onSelect?.(starCount);
        }
    };

    return (
        <div
            className={classNames(cls.starRating, {}, [className])}
            data-testid={'StarRating'}
        >
            {stars.map((star) => (
                <Icon
                    className={classNames(cls.star, {
                        [cls.hovered]: currentStarsCount >= star,
                        [cls.selected]: isSelected,
                    })}
                    key={star}
                    Svg={StarIcon}
                    width={size}
                    height={size}
                    onMouseEnter={onEnter(star)}
                    onMouseLeave={onLeave}
                    onClick={onClick(star)}
                    data-testid={`StarRating.${star}`}
                    data-selected={currentStarsCount >= star}
                />
            ))}
        </div>
    );
});
