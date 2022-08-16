import styled from "styled-components";

export const Brand = styled.div`
  display: flex;
  & > p {
    color: #000;
    text-decoration: none;
  }
`;

export const Logo = styled.svg`
  animation: App-logo-spin infinite 3s ease-in-out;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(720deg);
    }
  }
`;

export const USerProfile = styled.button`
  background: transparent;
  border: none;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  & > img {
    width: 35px;
    height: 35px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const SideBar = styled.div`
  padding: 1rem;
  background: var(--white);
  width: 100%;
  transform: translateX(100%);
  transition: 0.7s;
  &.active {
    transform: translateX(0%);
  }
  max-width: 350px;
  position: fixed;
  top: 70px;
  bottom: 0px;
  right: 0px;
  text-align: center;
`;
