import { useState } from "react";

const useCounter = (initialState = 10) => {
    const [state, setState] = useState(initialState);

    const increment = (factor) => setState(state + factor);
    const reset = (initial) => setState(initial);
    const decrement = (factor) => setState(state - factor);

    return {
        state,
        increment,
        decrement,
        reset
    }
}

export default useCounter;