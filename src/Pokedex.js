import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

export default class Pokedex extends Component {
  render() {
    const PokeData = {
      pokemon: [
        {
          id: 4,
          name: "Charmander",
          type: "bug",
          base_experience: 62
        },
        {
          id: 7,
          name: "Squirtle",
          type: "water",
          base_experience: 63
        },
        {
          id: 11,
          name: "Metapod",
          type: "bug",
          base_experience: 72
        },
        {
          id: 12,
          name: "Butterfree",
          type: "flying",
          base_experience: 178
        },
        {
          id: 25,
          name: "Pikachu",
          type: "electric",
          base_experience: 112
        },
        {
          id: 39,
          name: "Jigglypuff",
          type: "normal",
          base_experience: 95
        },
        {
          id: 94,
          name: "Gengar",
          type: "Poison",
          base_experience: 225
        },
        {
          id: 133,
          name: "Eevee",
          type: "normal",
          base_experience: 65
        }
      ]
    };
    return (
      <div className="Pokedex">
        <h1>Pokedex</h1>
        <div className="Pokedex-cards">
          {PokeData.pokemon.map(data => (
            <Pokecard
              id={data.id}
              name={data.name}
              type={data.type}
              exp={data.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}
