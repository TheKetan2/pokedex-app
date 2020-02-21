import React from "react";

import "./App.css";
// import Pokecard from "./Pokecard";
import Pokedex from "./Pokedex";
import Pokegame from "./Pokegame";

function App() {
  return (
    <div className="App">
      <h3>Refresh to shuffle cards</h3>
      <Pokegame />
    </div>
  );
}

export default App;
