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
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    text-align: center;
  }

  @media (min-width: 1200px) {
    padding-left: 150px;
  }

  @media (min-width: 1600px) {
    padding-left: 200px;
  }
`;
