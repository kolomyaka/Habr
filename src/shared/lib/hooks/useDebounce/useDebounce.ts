import { useCallback, useRef } from 'react';

export function useDebounce(callback: (...args: []) => void, delay: number) {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    return useCallback((...args: []) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}