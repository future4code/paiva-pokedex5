import styled from "styled-components";
import backgroundImage from "./img/backgroundImage.jpg";

export const PageContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 7fr;
`;

export const MainContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: 100vw 90.5vh;
  background-repeat: no-repeat;
`;
