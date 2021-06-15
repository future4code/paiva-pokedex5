import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage, goToPokedexPage, previousPage } from '../routes/Coordinator';

const HeaderContainer = () => {
  const history = useHistory();
  const pathname = history.location.pathname;

  const renderHeaderContainer = () => {
    switch (pathname) {
      case "/":
        return (
          <div>
            <button onClick={() => { goToPokedexPage(history) }}>Ir para pokedex</button>
          </div>
        );
      case "/pokedex":
        return (
          <div>
            <button onClick={() => { goToHomePage(history) }}>Ir para lista</button>
          </div>
        );
      case "/poke-detail":
        return (
          <div>
            <button onClick={() => { previousPage(history) }}>Voltar</button>
            <button>Adicionar/Remover</button>
          </div>
        );
      default:
        return;
    }
  }

  return (
    <div>
      {renderHeaderContainer()}
    </div>
  );
}

export default HeaderContainer;