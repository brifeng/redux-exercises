import React, { useState } from "react";

const NewMemeForm = ({ addMeme }) => {
    const INITIAL_STATE = {
        image: "",
        topText: "",
        bottomText: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(f => ({ ...f, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addMeme({ ...formData });
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
            />
            <input type="text"
                name="topText"
                placeholder="Top Text"
                value={formData.topText}
                onChange={handleChange}
            />
            <input type="text"
                name="bottomText"
                placeholder="Bottom Text"
                value={formData.bottomText}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default NewMemeForm;