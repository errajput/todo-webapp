import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    deleteData,
    getData,
    isLogin,
    postData,
    updateData,
} from "../services/http.service";

export const Todos = () => {
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    const [currentTodo, setCurrentTodo] = useState("");

    const handleInputChange = (e) => {
        setCurrentTodo(e.target.value);
    };

    const addTodo = async (e) => {
        e.preventDefault();
        if (!currentTodo) return;
        await postData("todos", { title: currentTodo });
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
        // TODO: Add Navigate to Login if not login

        if (isLogin()) {
            getTodos();
        } else {
            navigate("/login");
        }
    }, []);

    return (
        <>
            <div className="add-todo-container">
                <form onSubmit={addTodo}>
                    <input
                        type="text"
                        value={currentTodo}
                        required
                        onChange={handleInputChange}
                    />
                    <button type="submit">Add</button>
                </form>
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
                {todos.length === 0 && <h2>No Todo Found, Please Add.</h2>}
            </ul>
        </>
    );
};
