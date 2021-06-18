import React from 'react';

const DetailContainer = (props) => {
    return (
        <div>
            <img src={props.pokemon.sprites["front_default"]}></img>
            <img src={props.pokemon.sprites["back_default"]}></img>
            <div>Status</div>
            <div>Types</div>
            <div>Moves</div>
        </div>
    )
}

export default DetailContainer;