import React from 'react';
import styled from 'styled-components';

const CardStyleContainer = styled.div`
    height: 200px;
    width: 200px;
    border: 1px solid green;
`

const  CardContainer = () => {
    return (
        <CardStyleContainer>CardContainer</CardStyleContainer>
    );
};

export default CardContainer;