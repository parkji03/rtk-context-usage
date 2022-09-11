import { createContext, ReactNode, useState } from "react";

type CounterContextType = {
    setCounter: React.Dispatch<React.SetStateAction<number>>;
    count: number;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
};

export const CounterContext = createContext<CounterContextType>({
    setCounter: () => {},
    count: 0,
    setIsLoading: () => {},
    isLoading: false,
});

interface CounterWithContextProviderProps {
    children: ReactNode,
}

export const CounterWithContextProvider = (props: CounterWithContextProviderProps) => {
    const [count, setCounter] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <CounterContext.Provider
            value={({
                setCounter,
                count,
                isLoading,
                setIsLoading,
            })}>
                {props.children}
        </CounterContext.Provider>
    );
}