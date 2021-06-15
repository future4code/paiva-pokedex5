import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { goToPokeDetail } from '../routes/Coordinator';

const CardStyleContainer = styled.div`
    height: 320px;
    width: 240px;
    border: 1px solid green;
    display: grid;
    grid-template-rows: 280px 40px;

    button {
        height: 100%;
        width: 50%;
    }
`

const CardContainer = () => {
    const history = useHistory();
    const pathname = history.location.pathname;

    return (
        <CardStyleContainer>
            <img src={"https://picsum.photos/240/280"} alt={"imagem"}></img>
            <div>
                {(pathname === "/") ?
                    <button>Adicionar</button> :
                    <button>Remover</button>}
                <button onClick={() => {goToPokeDetail(history)}}>Detalhes</button>
            </div>
        </CardStyleContainer>
    );
};

export default CardContainer;