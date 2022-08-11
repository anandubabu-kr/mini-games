import styled from 'styled-components'

export const BoardRow = styled.div`
    display: flex;
`

export const BoardButton = styled.button`
    background: #fff;
    border: 1px solid var(--dark-green);
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 60px;
    width: 60px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    color: var(--dark-green);
`

export const Moves = styled.menu``

export const MoveList=styled.ol`
    list-style: none;
    padding: 0px;
    margin: 1rem;


`
export const MoveButton=styled.button`
    background-color: var(--light-green);
    width: 100%;
    padding: .5rem 1rem;
    border: none;
    &:hover{
        background-color: var(--dark-green);
    }

`