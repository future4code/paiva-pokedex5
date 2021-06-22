import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import useRequestedPokeInfo from '../hooks/useRequestedPokeInfo';

const GlobalState = (props) => {
    const allPokeInfo = useRequestedPokeInfo([]);
    const [pokedex, setPokedex] = useState([]);

    const data = {
        allPokeInfo,
        pokedex,
        setPokedex
    };

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalState;