import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        task: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(f => ({
            ...f, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData);
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="task"
                placeholder="What to do?"
                value={formData.task}
                onChange={handleChange}
            ></input>
            <button>Submit</button>
        </form>
    )

}

export default TodoForm;