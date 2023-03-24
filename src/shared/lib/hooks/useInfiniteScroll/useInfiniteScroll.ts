import { MutableRefObject, useEffect } from 'react';

interface useInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll(props: useInfiniteScrollProps) {
    const {
        callback,
        triggerRef,
        wrapperRef
    } = props;

    useEffect(() => {
        let observer: IntersectionObserver | null;
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };
            // Создаем обсервер
            observer = new IntersectionObserver(([entry]) => {
                // Когда доходим до элемента за которым следим, тело этой функции
                if (entry.isIntersecting) {
                    callback?.();
                }
            }, options);

            // Здесь мы указываем за каким элементом будем следить
            observer.observe(triggerElement);
        }

        return () => {
            // При демонтировании компонента отписывается от наблюдения
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };

    }, [callback, triggerRef, wrapperRef]);


}