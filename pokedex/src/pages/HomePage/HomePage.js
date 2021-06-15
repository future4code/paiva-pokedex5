import React, { useState, useEffect } from 'react';
import HeaderContainer from '../../components/HeaderContainer';
import CardContainer from '../../components/CardContainer';
import { PageContainer } from '../../GlobalStyles';
import axios from 'axios';
import { baseURL } from '../../constants/baseURL';


const HomePage = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const pokeUrls = [];

  useEffect(() => {
    const url = `${baseURL}/pokemon?limit=3&offset=0`;

    axios
    .get(url)
    .then((res) => {
      setAllPokemons(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });

  }, []);


  const renderPokeCards = allPokemons && allPokemons.map((pokemon) => {
    pokeUrls.push(pokemon.url);
    return (
      <div key={pokemon.name}>
        <CardContainer
          pokeUrls={pokeUrls}
        />
      </div>
    );
  });

  return (
    <PageContainer>
      <HeaderContainer />
      {renderPokeCards}
    </PageContainer>
  );
}

export default HomePage;