import { useContext } from 'react';
import { CounterContext } from '../CounterWithContext/Counter.context';
export function Loading() {
    const { setIsLoading } = useContext(CounterContext);

    console.log('loading with context rendered');

    return (
        <>
            <button onClick={() => setIsLoading(true)}>
                set isLoading true
            </button>
            <button onClick={() => setIsLoading(false)}>
                set isLoading false
            </button>
        </>
    );
}