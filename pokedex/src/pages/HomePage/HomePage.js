import React, { useContext } from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import CardContainer from "../../components/CardContainer/CardContainer";
import { MainContainer, PageContainer } from "../../GlobalStyles";
import GlobalStateContext from "../../global/GlobalStateContext";

const HomePage = () => {
  const { allPokeInfo, pokedex, setPokedex } = useContext(GlobalStateContext);

  const addPokemonToPokedex = (pokemonToAdd) => {
    const index = pokedex.findIndex((pokemonInPokedex) => {
      if (pokemonInPokedex.id === pokemonToAdd.id) {
        return true;
      } else {
        return false;
      }
    });

    if (index === -1) {
      const pokedexCopy = [...pokedex, pokemonToAdd];

      const indexPokemonRemoved = allPokeInfo.findIndex((pokemon) => {
        if (pokemon.id === pokemonToAdd.id) {
          return true;
        } else {
          return false;
        }
      })

      allPokeInfo.splice(indexPokemonRemoved, 1)
      const orderedPokedex = pokedexCopy.sort((a, b) => {
        return a.id - b.id;
      })

      setPokedex(orderedPokedex);
    };
  };

  const renderPokeCards =
    allPokeInfo[0] &&
    allPokeInfo.map((pokemon) => {
      return (
        <CardContainer
          key={pokemon.id}
          pokemon={pokemon}
          addPokemonToPokedex={addPokemonToPokedex}
        />);
    });

  return (
    <PageContainer>
      <HeaderContainer />
      <MainContainer>
        {renderPokeCards}
      </MainContainer>
    </PageContainer>
  );
};

export default HomePage;