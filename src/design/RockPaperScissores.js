import styled from 'styled-components'

export const GameStatusBoard=styled.div`
    text-align: center;
`

export const Choices = styled.div`
display: flex;
align-items: center;
justify-content: baseline;
    &>button{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: none;
        background-color: var(--light-green);
        transition: .4s;
        padding: 1rem ;
        &:hover{
            background-color: var(--dark-green);
            color: white;
        }
        &:nth-child(2){
            margin-bottom: 4rem;
        }
    }
`