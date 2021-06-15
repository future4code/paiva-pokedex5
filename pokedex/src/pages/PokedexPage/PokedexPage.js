import React from 'react';
import HeaderContainer  from '../../components/HeaderContainer';
import { PageContainer } from '../../GlobalStyles';
import CardContainer from '../../components/CardContainer';

const PokedexPage = () => {
  return (
    <PageContainer>
      <HeaderContainer />
      <CardContainer />
    </PageContainer>
  );
}

export default PokedexPage;