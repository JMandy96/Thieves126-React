import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

interface IPokemon {
    name: string;
    img: string;
    abilities: string[];
}

const PokemonData = () => {
    const [pokeName, setPokeName] = useState("");
    const [pokemon, setPokemon] = useState<IPokemon>({
        name: "",
        img: "",
        abilities: [],
    });

    useEffect(() => {
        pokemonData(pokeName);
    }, [pokeName]);

    const pokemonData = async (name: string) => {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        if (response.ok) {
            const data = await response.json();
            setPokemon({
                name: data.name,
                img: data.sprites.front_default,
                abilities: [
                    data.abilities[0].ability.name,
                    data.abilities[1].ability.name,
                ],
            });
        }
    };

    const catchPokemon = async () => {
        if (auth.currentUser && pokemon.name) {
            const userId = auth.currentUser.uid
            await setDoc(doc(db, "users", userId, "team", pokemon.name), pokemon);
            alert(`Caught ${pokemon.name}`)
        }
    }

    return (
        <>
            <Nav/>
            <h1 className="text-center">Pokemon Finder</h1>
            <input
                className="d-block mx-auto"
                type="text"
                onChange={(event) => setPokeName(event.target.value)}
            />
            {pokemon.name && 
            <div className="card mx-auto" style={{ width: "18rem" }}>
                <img src={pokemon.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    {pokemon.abilities.map((ability, idx) => <li key={idx}>{ability}</li>)}
                </div>
                <button onClick={catchPokemon}>Catch</button>
            </div>
            }
        </>
    );
};
export default PokemonData;
