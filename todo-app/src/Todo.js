import React from "react";

const Todo = ({ task, removeTodo }) => {
    return (
        <li>
            {task} <button onClick={removeTodo}>Done!</button>
        </li>
    )
}

export default Todo;