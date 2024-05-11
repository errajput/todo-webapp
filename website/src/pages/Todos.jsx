import { useState } from "react";

function MyTodos() {
    const [myTodos, setMyTodos] = useState([]);
    const [myCurrentTodo, setCurrentTodo] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        if (!myCurrentTodo) return;
        console.log({ myCurrentTodo });

        setMyTodos([...myTodos, myCurrentTodo]);
        setCurrentTodo("");
    };

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setCurrentTodo(e.target.value);
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    value={myCurrentTodo}
                    onChange={handleInputChange}
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <div>
                <ul>
                    {myTodos.map((todo, i) => (
                        <li key={i}>{todo}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default MyTodos;
