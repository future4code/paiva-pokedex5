import React from "react";
import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goToPokedexPage,
  previousPage
} from "../../routes/Coordinator";
import { useParams } from 'react-router-dom';
import { HeaderStyle, ButtonContainer } from './styled';

const HeaderContainer = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const pathParams = useParams();

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
            <ButtonContainer>
              <button
                onClick={() => {
                  previousPage(history);
                }}
              >
                Voltar
              </button>
              <button>Adicionar/Remover</button>
            </ButtonContainer>
          </div>
        );
      default:
        return;
    }
  };

  return <HeaderStyle>{renderHeaderContainer()}</HeaderStyle>;
};

export default HeaderContainer;