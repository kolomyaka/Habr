import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);

    setTimeout(() => {
        throttleRef.current = false;
    }, delay);

    return useCallback((...args) => {
        if (!throttleRef.current) {
            callback(...args);
            throttleRef.current = true;
        }
    }, [callback]);
}