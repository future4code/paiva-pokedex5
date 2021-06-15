import React from 'react';
import HeaderContainer from '../../components/HeaderContainer';
import CardContainer from '../../components/CardContainer';
import { PageContainer } from '../../GlobalStyles';


const HomePage = () => {
  return (
    <PageContainer>
      <HeaderContainer />
      <div>
        <CardContainer />
      </div>
    </PageContainer>
  );
}

export default HomePage;