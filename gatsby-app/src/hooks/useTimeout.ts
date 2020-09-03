import { useEffect, useRef } from 'react';

const useTimeOut = (callback: () => void, delay: number): void => {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay !== null) {
            const id = setTimeout(() => savedCallback.current(), delay);
            return () => clearTimeout(id);
        }
    }, [delay]);
};

export default useTimeOut;
