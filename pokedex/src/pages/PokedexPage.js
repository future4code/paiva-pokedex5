import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../routes/Coordinator';

const PokedexPageContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 7fr;

  div {
    border: 1px solid red;
  }

`

const PokedexPage = () => {
  const history = useHistory();

  return (
    <PokedexPageContainer>
      <div><button onClick={() => {goToHomePage(history)}}>Ir para lista</button></div>
      <div>All Cards da pokedex</div>
    </PokedexPageContainer>
  );
}

export default PokedexPage;