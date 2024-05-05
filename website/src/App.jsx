import { RouterProvider } from "react-router-dom";

import { useState } from "react";

import router from "./routes";

function App() {
    // let count = 0;
    let [count, setCount] = useState(0);

    const increment = () => {
        // count += 1;
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Todo WebApp</h1>
            {/* rerender */}
            <button onClick={increment}>add</button>
            <h2> {count}</h2>
            <button onClick={decrement}>less</button>
            <hr />
            <nav>
                <ul>
                    <li>
                        <a href="/">My Todos</a>
                    </li>
                    <li>
                        <a href="/todos">Todos</a>
                    </li>
                </ul>
            </nav>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
