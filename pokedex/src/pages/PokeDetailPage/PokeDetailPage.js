import React, { useContext } from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import { PageContainer, MainContainer } from "../../GlobalStyles";
import DetailContainer from "../../components/DetailContainer/DetailContainer";
import { useParams } from 'react-router-dom';
import GlobalStateContext from "../../global/GlobalStateContext";

const PokeDetailPage = () => {
  const { allPokeInfo } = useContext(GlobalStateContext)
  const pathParams = useParams();

  const renderPokeDetail = allPokeInfo.map((pokemon) => {
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
