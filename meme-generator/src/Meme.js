import React from "react";

const Meme = ({ img, topText, bottomText, removeMeme }) => {

    return (
        <div>
            <h5>{topText}</h5>
            <img src={img}></img>
            <h5>{bottomText}</h5>
            <button onClick={removeMeme}>Remove</button>
        </div>
    )
}

export default Meme;