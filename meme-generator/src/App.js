import './App.css';
import React from 'react';
import NewMemeForm from './NewMemeForm';
import { useSelector, useDispatch } from "react-redux";
import Meme from './Meme';

function App() {
  const memes = useSelector(state => state.memes);
  const dispatch = useDispatch();

  function addMeme(newMeme) {
    dispatch({ type: "ADD_MEME", meme: { ...newMeme, id: memes.length } });
  }

  const removeMeme = (id) => {
    dispatch({ type: "REMOVE_MEME", id: id });
  }

  const memeSet = memes.map(m => (
    <Meme
      img={m.image}
      topText={m.topText}
      bottomText={m.bottomText}
      removeMeme={() => removeMeme(m.id)}
    />
  ))

  return (
    <div className="App">
      <header className="App-header">
        <NewMemeForm addMeme={addMeme} />
        {memeSet}
      </header>
    </div>
  );
}

export default App;
