import styled from "styled-components";

// ----------------------------------
export const Container = styled.section`
  position: fixed;
  left: 0;
  background-color: #f2f2fc;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 1;

  @media (min-width: 1200px) {
    left: 270px;
  }

  @media (min-width: 1600px) {
    left: 370px;
  }
`;
