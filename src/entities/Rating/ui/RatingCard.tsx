import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useDevice } from '@/shared/lib/hooks';
import {
    Typography,
    StarRating,
    Modal,
    VStack,
    Input,
    HStack,
    Button,
    ButtonSize,
    Card,
    Drawer,
} from '@/shared/ui';

interface RatingCardProps {
    className?: string;
    title?: string | null;
    feedbackTitle?: string | null;
    hasFeedback?: boolean;
    rate?: number;
    onCancel?: (starCount: number) => void;
    onAccept?: (starCount: number, feedback: string) => void;
    isLoading?: boolean;
}

export const RatingCard = (props: RatingCardProps) => {
    const {
        className,
        title,
        hasFeedback,
        feedbackTitle,
        rate = 0,
        onAccept,
        onCancel,
    } = props;

    const { t } = useTranslation();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [starsCount, setStarsCount] = useState(rate);
    const isMobile = useDevice();

    const onSelectHandler = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);

            if (hasFeedback) {
                setIsOpenModal(true);
            } else {
                onAccept?.(selectedStarsCount, feedback);
            }
        },
        [feedback, hasFeedback, onAccept],
    );

    const onAcceptHandler = useCallback(() => {
        setIsOpenModal(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const onCancelHandler = useCallback(() => {
        setIsOpenModal(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Typography size={'l'} as={'h4'}>
                {feedbackTitle}
            </Typography>
            <Input
                data-testid={'RatingCard.Input'}
                label={t('Оставьте ваш отзыв')}
                value={feedback}
                onChange={setFeedback}
            />
        </>
    );

    return (
        <Card className={className} data-testid={'RatingCard'}>
            <VStack gap={8} align={'center'}>
                <Typography size={'l'} as={'h4'}>
                    {starsCount ? t('Спасибо за ваш отзыв!') : title}
                </Typography>
                <StarRating
                    selectedStars={starsCount}
                    onSelect={onSelectHandler}
                />
            </VStack>
            {isMobile ? (
                <Drawer isOpen={isOpenModal} onClose={onCancelHandler}>
                    <VStack max gap={32}>
                        {modalContent}
                        <Button size={ButtonSize.L} onClick={onAcceptHandler}>
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            ) : (
                <Modal isOpen={isOpenModal}>
                    <VStack max gap={32}>
                        {modalContent}
                        <HStack gap={16} justify={'end'}>
                            <Button
                                data-testid={'RatingCard.Cancel'}
                                onClick={onCancelHandler}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                data-testid={'RatingCard.Send'}
                                onClick={onAcceptHandler}
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            )}
        </Card>
    );
};
