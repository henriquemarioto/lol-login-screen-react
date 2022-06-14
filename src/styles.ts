import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  box-sizing: border-box;
  /** glassmorphism */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media (min-width: 1366px) {
    padding: 20px 40px;
  }
`;

export const ContainerContent = styled.div`
  height: 100%;
  box-shadow: 0px 0px 33px 2px rgba(0, 0, 0, 1);
  display: flex;
  box-sizing: border-box;
`;
