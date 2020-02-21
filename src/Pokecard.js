import React, { Component } from "react";
import "./Pokecard.css";

// const POKE_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

export default class Pokecard extends Component {
  render() {
    let truncImg = "0000" + this.props.id;
    let imgSrc = `${POKE_API}${truncImg.slice(-3)}.png`;
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-title">{this.props.name}</h2>
        <img src={imgSrc} alt={this.props.name} />
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">Exp: {this.props.exp}</div>
      </div>
    );
  }
}
