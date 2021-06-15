export const goToHomePage = (history) => {
    history.push("/");
};

export const goToPokedexPage = (history) => {
    history.push("/pokedex");
};

export const goToPokeDetail = (history) => {
    history.push("/poke-detail");
};

export const previousPage = (history) => {
    history.goBack();
};