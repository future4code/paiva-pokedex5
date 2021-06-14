import React from 'react';
import styled from 'styled-components';
import { goToPokedexPage } from '../routes/Coordinator';
import { useHistory } from 'react-router-dom';

const HomePageContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 7fr;

  div {
    border: 1px solid red;
  }

`

const HomePage = () => {
  const history = useHistory();

  return (
    <HomePageContainer>
      <div><button onClick={() => {goToPokedexPage(history)}}>Ir para pokedex</button></div>
      <div>All Cards</div>
    </HomePageContainer>
  );
}

export default HomePage;