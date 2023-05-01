import { MutableRefObject, ReactNode, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import type { StateSchema } from '@/app/providers/StoreProvider';
import { scrollSaveActions } from '@/features/ScrollSave';
import { getScrollSaveByPath } from '@/features/ScrollSave/model/selectors/scrollSaveSelectors';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';




import cls from './Page.module.scss';


interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd
    } = props;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const scrollTop = useSelector((state: StateSchema) => getScrollSaveByPath(state, pathname));

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollTop;
    });

    const onScroll = useThrottle((e: React.UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        }));
    }, 500);

    return (
        <section
            onScroll={onScroll}
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
        >
            {children}
            {onScrollEnd&&<div className={cls.trigger} ref={triggerRef} />}
        </section>
    );
};


