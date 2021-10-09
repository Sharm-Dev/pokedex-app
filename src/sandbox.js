import React from "react";

const App = () => {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
};
const Logo = () => {
  const appName = "Maha's Pokedex";

  return (
    <header>
      <h1> Welcome to {appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pidgey"
      ></img>
    </header>
  );
};
const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((ability) => {
          return <li>{ability}</li>;
        })}
      </ul>
    </div>
  );
};

const CaughtPokemon = () => {
  const date = new Date().toLocaleDateString();

  return <p>Caught 0 Pokemon on {date}</p>;
};
export default App;
