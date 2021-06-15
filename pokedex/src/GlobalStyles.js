import styled from 'styled-components';
import backgroundImage from './img/backgroundImage.jpg';

export const PageContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 7fr;
  border: 1px solid red;

  div:nth-child(2){
    background-image: url(${backgroundImage});
    background-size: 100vw 87.5vh;
    background-repeat: no-repeat;
  }
`