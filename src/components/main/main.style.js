import styled from 'styled-components'

export const MainContainer = styled.div`
width: 100%;
height: auto;
    align-self: flex-end;
    
`
export const MainWrapper = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 7rem;
    margin-bottom: 2rem;
    align-items: center;
    @media(max-width:342px){
        width: 100%;
    }
`
export const OptionContainer = styled.div`
width: 100%;
    display: flex;
    gap: 2rem;
flex-wrap: wrap;
align-items: center;
`

export const Option = styled.div`
    flex: 1;
    border: 2px solid gray;
    padding: 10px;
    border-radius: 10px;
    min-width: 300px;
    gap: 2rem;
    cursor: pointer;
    box-shadow: 0px 2px 2px 0px darkgray;
background: linear-gradient(#0e0124, #22074d);

    
`
export const Text = styled.p`
    min-width: 100%;
text-align: center;
font-weight: lighter;
font-size: 18px;
font-family: monospace;
`