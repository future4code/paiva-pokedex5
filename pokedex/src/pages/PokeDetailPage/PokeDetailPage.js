import React from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import { PageContainer, MainContainer } from "../../GlobalStyles";
import DetailContainer from "../../components/DetailContainer/DetailContainer";
import { useParams } from 'react-router-dom';

const PokeDetailPage = (props) => {
  const pathParams = useParams();

  const renderPokeDetail = props.allPokeInfo.map((pokemon) => {
    if(pokemon.name === pathParams.pokeName) {
      return (
          <DetailContainer key={pokemon.id} pokemon={pokemon}/>
      );
    };
  });

  return (
    <PageContainer>
      <HeaderContainer />
      <MainContainer>
        {renderPokeDetail}
      </MainContainer>
    </PageContainer>
  );
};

export default PokeDetailPage;
