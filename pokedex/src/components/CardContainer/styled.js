import styled from 'styled-components';

export const CardStyleContainer = styled.div`
  height: 320px;
  width: 240px;
  margin: 24px 0;
  background-color: white;
  box-shadow: 2px 2px 2px darkgrey;
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