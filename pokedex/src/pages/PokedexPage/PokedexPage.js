import React from 'react';
import HeaderContainer  from '../../components/HeaderContainer';
import { PageContainer } from '../../GlobalStyles';

const PokedexPage = () => {
  return (
    <PageContainer>
      <HeaderContainer />
      <div>All Cards da pokedex</div>
    </PageContainer>
  );
}

export default PokedexPage;