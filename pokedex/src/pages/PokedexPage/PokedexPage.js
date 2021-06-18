import React from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import { PageContainer, MainContainer } from "../../GlobalStyles";
import CardContainer from "../../components/CardContainer/CardContainer";

const PokedexPage = (props) => {
  const { allPokeInfo } = props

  const removeFromPokedex = (pokemonRemoved) => {
    const pokedexCopy = props.pokedex.filter((pokemonInPokedex) => {
      if (pokemonInPokedex.id === pokemonRemoved.id) {
        return false;
      } else {
        return true;
      }
    });

    allPokeInfo.push(pokemonRemoved);

    props.setPokedex(pokedexCopy);
  }

  return (
    <PageContainer>
      <HeaderContainer />
      <MainContainer>
        {props.pokedex[0] && props.pokedex.map((pokemon) => {
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
