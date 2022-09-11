import { ReactNode } from "react";

interface RandomProps {
    children: ReactNode;
}

export function Random(props: RandomProps) {
    console.log('Random component rendered');

    return (
        <div>
            {props.children}
        </div>
    );
}