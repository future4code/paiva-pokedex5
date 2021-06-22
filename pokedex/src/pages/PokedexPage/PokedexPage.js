import React, { useContext } from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import { PageContainer, MainContainer } from "../../GlobalStyles";
import CardContainer from "../../components/CardContainer/CardContainer";
import GlobalStateContext from "../../global/GlobalStateContext";

const PokedexPage = () => {
  const { allPokeInfo, pokedex, setPokedex } = useContext(GlobalStateContext);

  const removeFromPokedex = (pokemonRemoved) => {
    const pokedexCopy = pokedex.filter((pokemonInPokedex) => {
      if (pokemonInPokedex.id === pokemonRemoved.id) {
        return false;
      } else {
        return true;
      }
    });

    allPokeInfo.push(pokemonRemoved);
    const orderedAllPokeInfo = allPokeInfo.sort((a, b) => {
      return a.id - b.id;
    })

    setPokedex(pokedexCopy);
  }

  return (
    <PageContainer>
      <HeaderContainer />
      <MainContainer>
        {pokedex[0] && pokedex.map((pokemon) => {
          return (
            <CardContainer
              key={pokemon.id}
              pokemon={pokemon}
              removeFromPokedex={removeFromPokedex}
            />
          );
        })}
      </MainContainer>
    </PageContainer>
  );
};

export default PokedexPage;
