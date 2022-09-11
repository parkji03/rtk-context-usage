import { useContext } from 'react';
import { CounterContext } from '../CounterWithContext/Counter.context';
export function IncrementButton() {
    const { setCounter } = useContext(CounterContext);

    console.log('increment button with context rendered');

    return (
        <button onClick={() => setCounter((prev) => prev += 1)}>
            Increment
        </button>
    );
}