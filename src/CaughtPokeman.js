import { useState } from "react";



const CaughtPokemon = (props) => {
    let [caught, setCaught] = useState([]);
    const catchPokemon = () =>{
        let newPokemon = [
          "Bulbasur",
          "Squirtle",
          "Mewtwo",
          "Eevee",
          "Charizard",
          "Snorlax",
          "Charmander",
        ];
        let randomPokemon = Math.floor(Math.random()* newPokemon.length);
        setCaught(caught.concat(newPokemon[randomPokemon]));
    };
    return (
    <div>
        <p>Caught {caught.length} Pokemon on {props.date}</p>
        <button onClick={catchPokemon}>Catch Me!</button>
        <ul>
            {caught.map((item, index)=>
            <li key={index}>{item}</li>)}
        </ul>
    </div>
    );

};

export default CaughtPokemon;