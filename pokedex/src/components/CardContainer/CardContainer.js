import React from "react";
import { useHistory } from "react-router-dom";
import { goToPokeDetail } from "../../routes/Coordinator";
import { CardStyleContainer } from './styled';



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