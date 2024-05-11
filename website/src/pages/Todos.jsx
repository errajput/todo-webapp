import { useEffect, useState } from "react";
import { API_URL, getData, saveData } from "../services/http.service";

function MyTodos() {
    const [myTodos, setMyTodos] = useState([]);
    const [myCurrentTodo, setCurrentTodo] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        if (!myCurrentTodo) return;
        console.log({ myCurrentTodo });

        // setMyTodos([...myTodos, myCurrentTodo]);
        saveTodo(myCurrentTodo);
        setCurrentTodo("");
    };

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setCurrentTodo(e.target.value);
    };

    const getTodos = async () => {
        const response = await getData(API_URL + "todos");
        const todos = response?.data;
        console.log("todos ", todos);

        if (todos instanceof Array) {
            setMyTodos(todos.map((v) => v?.title));
        }
    };

    const saveTodo = async (todo) => {
        await saveData(API_URL + "todos", { title: todo });
        await getTodos();
    };

    useEffect(() => {
        getTodos();
    }, []);

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
