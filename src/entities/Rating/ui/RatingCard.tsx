import { classNames } from '@/shared/lib/classNames/classNames';
import { Typography } from '@/shared/ui/Typography/Typography';
import { useTranslation } from 'react-i18next';
import { StarRating } from '@/shared/ui/StarRating';
import { useCallback, useState } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Input } from '@/shared/ui/Input/Input';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Button } from '@/shared/ui/Button/Button';

interface RatingCardProps {
    className?: string;
    title?: string | null;
    feedbackTitle?: string | null;
    hasFeedback?: boolean;
    onCancel?: (starCount: number) => void;
    onAccept?: (starCount: number, feedback: string) => void;
}

export const RatingCard = (props: RatingCardProps) => {
    const {
        className,
        title,
        hasFeedback,
        feedbackTitle,
        onAccept,
        onCancel,
    } = props;

    const { t } = useTranslation();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [starsCount, setStarsCount] = useState(0);

    const onSelectHandler = useCallback((starCount: number) => {
        setStarsCount(starCount);

        if (hasFeedback) {
            setIsOpenModal(true);
        } else {
            onAccept?.(starCount, feedback);
        }
    }, [feedback, hasFeedback, onAccept]);

    return (
        <div className={classNames('', {}, [className])}>
            <Typography as={'h4'}>{title}</Typography>
            <StarRating onSelect={onSelectHandler} />
            <Modal isOpen={isOpenModal}>
                <VStack max gap={32}>
                    <Typography as={'h4'}>{feedbackTitle}</Typography>
                    <Input
                        label={t('Оставьте ваш отзыв')}
                        value={feedback}
                        onChange={setFeedback}
                    />
                    <HStack gap={16} justify={'end'}>
                        <Button>
                            {t('Отменить')}
                        </Button>
                        <Button>
                            {t('Отправить')}
                        </Button>
                    </HStack>
                </VStack>

            </Modal>
        </div>
    );
};


