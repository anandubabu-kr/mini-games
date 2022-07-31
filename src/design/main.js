import styled from 'styled-components'


export const Container = styled.div`
    max-width: 1202px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const MainComtainer = styled(Container)`
    height: 100vh;
    width: 100%;
    max-width: none;
`

export const GameCanvas = styled.main`
    width: 100%;
    max-width: 700px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    @media screen and (max-width: 400px) {
        flex-direction: column;
        
    }
`
