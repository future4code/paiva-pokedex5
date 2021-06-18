import React from "react";
import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goToPokedexPage,
  previousPage
} from "../../routes/Coordinator";
import styled from "styled-components";
import { sixthColor, seventhColor } from "../../constants/Colors";
import { useParams } from 'react-router-dom'

const HeaderStyle = styled.div`
  color: ${seventhColor};
  background-color: ${sixthColor};
`;

const HeaderContainer = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const pathParams = useParams()

  const renderHeaderContainer = () => {
    switch (pathname) {
      case "/":
        return (
          <div>
            <h1>POKEMON</h1>
            <button
              onClick={() => {
                goToPokedexPage(history);
              }}
            >
              Ir para pokedex
            </button>
          </div>
        );
      case "/pokedex":
        return (
          <div>
            <h1>POKEDEX</h1>
            <button
              onClick={() => {
                goToHomePage(history);
              }}
            >
              Ir para lista
            </button>
          </div>
        );
      case `/poke-detail/${pathParams.pokeName}`:
        return (
          <div>
            <h1>POKEDETAILS</h1>
            <button
              onClick={() => {
                previousPage(history);
              }}
            >
              Voltar
            </button>
            <button>Adicionar/Remover</button>
          </div>
        );
      default:
        return;
    }
  };

  return <HeaderStyle>{renderHeaderContainer()}</HeaderStyle>;
};

export default HeaderContainer;