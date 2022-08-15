import styled from "styled-components";

export const GameStatusBoard = styled.div`
  text-align: center;
  div {
    background-color: var(--light-green);
    border-radius: 100px;
    padding: 1rem;
    img {
      width: 40px;
    }
  }
`;

export const Choices = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
`;

export const ChoiceButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  background-color: var(--light-green);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
  padding: 1rem;
  z-index: 2;
  &:hover {
    background-color: var(--dark-green);
    color: white;
  }
  &:nth-child(2) {
    margin-bottom: 4rem;
  }
  img {
    max-width: 40px;
    z-index: 1;
  }
`;
