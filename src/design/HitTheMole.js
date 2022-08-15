import styled from "styled-components";

export const GameBoard = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-wrap: wrap;
`;

export const Square = styled.div`
  height: 98px;
  aspect-ratio: 1/1;
  margin: 5px;
  border-radius: 50%;
  border: 1px solid var(--dark-green);
  background-color: var(--light-green);
  background-color: ${(props) => (props.active ? "green" : "white")};
`;

// .mole{
//     background-color: blue;
// }
