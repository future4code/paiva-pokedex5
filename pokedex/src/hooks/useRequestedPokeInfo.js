import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../constants/baseURL";

const useRequestedPokeInfo = (initialState) => {
    const [allPokeInfo, setAllPokeInfo] = useState(initialState);

    const getPokeInfo = () => {
        const copyPokeInfo = [];
        const qttPokemons = 20;

        for (let i = 1; i < qttPokemons + 1; i++) {
            const urlPokemon = `${baseURL}/pokemon/${i}`;

            axios
                .get(urlPokemon)
                .then((res) => {
                    copyPokeInfo[i - 1] = res.data;
                    if (i === qttPokemons) {
                        setAllPokeInfo(copyPokeInfo);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        getPokeInfo();
    }, []);

    return allPokeInfo;
};

export default useRequestedPokeInfo;
