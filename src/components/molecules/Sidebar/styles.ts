// styled components
import styled from "styled-components";

// -----------------------------------
export const StyledBar = styled.div`
  position: fixed;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: -370px;
  background-color: #fdf9ff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border-right: 1px solid #e8dfec;
  width: 270px;
  align-items: center;

  @media (min-width: 1200px) {
    left: 0;
  }

  @media (min-width: 1600px) {
    width: 370px;
  }
`;
