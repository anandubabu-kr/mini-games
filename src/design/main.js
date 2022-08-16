import styled from "styled-components";

export const Container = styled.div`
  max-width: 1202px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MainContainer = styled(Container)`
  height: 100vh;
  width: 100%;
  max-width: none;
`;

export const GameCanvas = styled.main`
  width: 100%;
  max-width: 700px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const FooterContainer = styled(Container)`
  background-color: var(--dark-green);
  max-width: none;
  min-height: 50px;
  justify-content: center;
  a {
    padding: 1rem;
    text-decoration: none;
    color: white;
  }
`;

export const NavContainer = styled(MainContainer)`
  flex-direction: row;
  height: 70px;
  box-shadow: 0 0 20px black;
  padding: 1rem 3rem;
`;

export const GameSetMenu = styled.menu`
  & > li {
    width: 100%;
  }
`;
