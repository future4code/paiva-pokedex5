import React from 'react';
import HeaderContainer  from '../../components/HeaderContainer';
import CardContainer from '../../components/CardContainer';
import { PageContainer } from '../../GlobalStyles';


const HomePage = () => {
  return (
    <PageContainer>
      <HeaderContainer />
      <CardContainer />
    </PageContainer>
  );
}

export default HomePage;