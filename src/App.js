import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokeman";

const App = () => {
  function logWhenClicked(){
    console.log("yeahhh");
  }
  return (
    <div>
      <Logo appName={"Sharm Pokedex"} handleClick={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
};


export default App;
