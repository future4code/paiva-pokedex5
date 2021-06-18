import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToPokeDetail } from "../../routes/Coordinator";

const CardStyleContainer = styled.div`
  height: 320px;
  width: 240px;
  border: 1px solid green;
  background-color: white;
  display: grid;
  grid-template-rows: 280px 40px;

  img {
    height: 280px;
    width: 240px;
  }

  button {
    height: 100%;
    width: 50%;
  }
`;

const CardContainer = (props) => {
  const history = useHistory();
  const pathname = history.location.pathname;

  return (
    <CardStyleContainer>
      <img src={props.pokemon.sprites.other["official-artwork"]["front_default"]} alt={"imagem"}></img>
      <div>
        {pathname === "/" ? (
          <button onClick={() => props.addPokemonToPokedex(props.pokemon)}>Adicionar</button>
        ) : (
          <button onClick={() => props.removeFromPokedex(props.pokemon)}>Remover</button>
        )}
        <button
          onClick={() => {goToPokeDetail(history, props.pokemon)}}
        >
          Detalhes
        </button>
      </div>
    </CardStyleContainer>
  );
};

export default CardContainer;