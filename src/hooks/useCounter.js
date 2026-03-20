import { useState } from "react";

export const useCounter = (initialValue=1) => {
    const [count, setCount] = useState(initialValue);

    const increase = () => setCount((prev) => prev + 1);
    const decrease = () => setCount((prev) => prev - 1);
    const reset = () => setCount(initialValue);

    return {count, increase, decrease, reset}
}