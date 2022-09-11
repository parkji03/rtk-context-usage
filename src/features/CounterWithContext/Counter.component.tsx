import { useContext, useState } from 'react';
import { CounterContext } from './Counter.context';
import styles from './Counter.module.css';

export function Counter() {
	const { count, setCounter } = useContext(CounterContext);
	const [incrementAmount, setIncrementAmount] = useState('2');
	const incrementValue = Number(incrementAmount) || 0;

	console.log('Counter With Context rendered');

	return (
	<div>
		<div className={styles.row}>
		<button
			className={styles.button}
			aria-label="Decrement value"
			onClick={() => setCounter((prev) => prev -= 1)}
		>
			-
		</button>
		<span className={styles.value}>{count}</span>
		<button
			className={styles.button}
			aria-label="Increment value"
			onClick={() => setCounter((prev) => prev += 1)}
		>
			+
		</button>
		</div>
		<div className={styles.row}>
		<input
			className={styles.textbox}
			aria-label="Set increment amount"
			value={incrementAmount}
			onChange={(e) => setIncrementAmount(e.target.value)}
		/>
		<button
			className={styles.button}
			onClick={() => setCounter((prev) => prev += incrementValue)}
		>
			Add Amount
		</button>
		</div>
	</div>
	);
}
