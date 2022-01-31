// Компонент называется также как и файл в котором он расположен и всегда с большой буквы

import React, { useState } from 'react';

const Counter = function () {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }
    
    function decrement() {
        setCount(count - 1)
    }

    // Возвращает JSX
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;
