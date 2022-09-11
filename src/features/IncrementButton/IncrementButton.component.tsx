import { useAppDispatch } from '../../app/store';
import { increment } from '../Counter/counter.slice';

export function IncrementButton() {
    const dispatch = useAppDispatch();

    console.log('increment button with redux rendered');

    return (
        <button onClick={() => dispatch(increment())}>
            Increment
        </button>
    );
}