import styled from "styled-components";
import { sixthColor, seventhColor } from "../../constants/Colors";

export const HeaderStyle = styled.div`
    padding: 8px;
    color: ${seventhColor};
    background-color: ${sixthColor};

  h1 {
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`