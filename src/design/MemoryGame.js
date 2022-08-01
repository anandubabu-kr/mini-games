import styled from 'styled-components'

export const GameBoard = styled.div`
    display: flex;
    width: 250px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    overflow: hidden;
    border: 2px solid var(--dark-green);
    border-radius: 10px;
    &>*{
        width: 50px;
        height: 50px;
        aspect-ratio: 1/1;
        margin: .2rem;
    }
`

