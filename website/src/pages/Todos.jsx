import { useEffect, useState } from "react";
import {
    deleteData,
    getData,
    saveData,
    updateData,
} from "../services/http.service";

export const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [currentTodo, setCurrentTodo] = useState("");

    const handleInputChange = (e) => {
        setCurrentTodo(e.target.value);
    };

    const addTodo = async (e) => {
        if (!currentTodo) return;
        await saveData("todos", { title: currentTodo });
        await getTodos();
        setCurrentTodo("");
    };

    const handleUpdate = async (e, id) => {
        await updateData(`todos/${id}`, { isDone: e.target.checked });
        await getTodos();
    };

    const handleDelete = async (id) => {
        await deleteData(`todos/${id}`);
        await getTodos();
    };

    const getTodos = async () => {
        const response = await getData("todos");
        const todos = response?.data;

        if (todos instanceof Array) {
            setTodos(todos);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <>
            <div className="add-todo-container">
                <input
                    type="text"
                    value={currentTodo}
                    onChange={handleInputChange}
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todos-container">
                {todos.map((todo, i) => (
                    <li key={i}>
                        <input
                            type="checkbox"
                            checked={todo.isDone}
                            onChange={(e) => handleUpdate(e, todo._id)}
                        />
                        <span>{todo.title}</span>
                        <button onClick={() => handleDelete(todo._id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
