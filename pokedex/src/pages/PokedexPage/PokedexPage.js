import React from 'react';
import HeaderContainer from '../../components/HeaderContainer';
import { PageContainer } from '../../GlobalStyles';
import CardContainer from '../../components/CardContainer';

const PokedexPage = () => {
  return (
    <PageContainer>
      <HeaderContainer />
      <div>
        <CardContainer />
      </div>
    </PageContainer>
  );
}

export default PokedexPage;