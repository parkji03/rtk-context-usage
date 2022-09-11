import { useAppDispatch, useAppSelector } from '../../app/store';
import { selectIsLoading, setIsLoading } from '../Counter/counter.slice';
export function Loading() {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selectIsLoading);

    console.log('loading with redux rendered');

    return (
        <>
            <p>
                {isLoading ? 'true' : 'false' }
            </p>
            <button onClick={() => dispatch(setIsLoading(true))}>
                set isLoading true
            </button>
            <button onClick={() => dispatch(setIsLoading(false))}>
                set isLoading false
            </button>
        </>
    );
}