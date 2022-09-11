import { Counter } from './features/Counter/Counter.component';
import { Counter as CounterWithContext } from './features/CounterWithContext/Counter.component';
import { CounterWithContextProvider } from './features/CounterWithContext/Counter.context';
import { IncrementButton } from './features/IncrementButton/IncrementButton.component';
import { IncrementButton as IncrementButtonWithContext } from './features/IncrementButtonWithContext/IncrementButton.component';
import { Loading } from './features/Loading/Loading.component';
import { Loading as LoadingWithContext } from './features/LoadingWithContext/Loading.component';
import { Random } from './features/Random/Random.component';

function App() {
  return (
    <>
      <div>
        <h1>Counter With Redux</h1>
        <Loading/>
        <IncrementButton />
        <Random>
          <Random>
            <Random>
              <Counter />
            </Random>
          </Random>
        </Random>
      </div>
      <div>
        <h1>Counter With Context</h1>
        <CounterWithContextProvider>
          <LoadingWithContext/>
          <IncrementButtonWithContext />
          <Random>
            <Random>
              <Random>
                <CounterWithContext />
              </Random>
            </Random>
          </Random>
        </CounterWithContextProvider>
      </div>
    </>
  );
}

export default App;
