import { useAppDispatch } from '../../app/store';
import { setIsLoading } from '../Counter/counter.slice';
export function Loading() {
    const dispatch = useAppDispatch();

    console.log('loading with redux rendered');

    return (
        <>
            <button onClick={() => dispatch(setIsLoading(true))}>
                set isLoading true
            </button>
            <button onClick={() => dispatch(setIsLoading(false))}>
                set isLoading false
            </button>
        </>
    );
}