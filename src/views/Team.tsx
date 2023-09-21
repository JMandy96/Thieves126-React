import { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase";

const Team = () => {
    const [team, setTeam] = useState<Array<DocumentData>>([]);

    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = async () => {
        if (auth.currentUser) {
            const userId = auth.currentUser.uid;
            const allPokemon = await getDocs(
                collection(db, "users", userId, "team")
            );
            allPokemon.forEach((pokemon) => {
                setTeam(team => [...team, pokemon.data()]);
            });
            console.log(team)
        }
    };

    return (
        <>
            <Nav />
            <h1 className="text-center">Current Team</h1>
            {team.length > 0 && (
                team.map((pokemon, idx) => (
                    <div className="card mx-auto" key={idx} style={{ width: "18rem" }}>
                        <img src={pokemon.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{pokemon.name}</h5>
                            {/* {pokemon.abilities.map((ability: string, idx: number) => (
                                <li key={idx}>{ability}</li>
                            ))} */}
                        </div>
                    </div>
                ))
            )}
        </>
    );
};
export default Team;
