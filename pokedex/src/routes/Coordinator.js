export const goToHomePage = (history) => {
    history.push("/");
};

export const goToPokedexPage = (history) => {
    history.push("/pokedex");
};

export const goToPokeDetail = (history, pokemon) => {
    history.push(`/poke-detail/${pokemon.name}`);
};

export const previousPage = (history) => {
    history.goBack();
};