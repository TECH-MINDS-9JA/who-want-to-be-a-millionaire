import styled from 'styled-components'

export const StopContainer = styled.div`
width: 100%;
height: 100vh;
background: linear-gradient(to bottom, rgba(0,0,0,0.2), #020230),url("/img/wrong.jpg") center;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const StopWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
`
export const Header = styled.h1`
    font-weight: 700;
    font-size: 5rem;
    text-transform: uppercase;
    color: crimson;
font-family: cursive;
`
export const Money = styled.h2`
    text-transform: capitalize;
    font-size: 3rem;
    font-family: monospace;
       color: whitesmoke;
`
export const Back = styled.button`
    cursor: pointer;
    width: 150px;
    border-radius: 5px;
    padding: 8px 15px;
        background: linear-gradient(#100241, black);
        font-weight: 700;
        color: whitesmoke;
        text-transform: uppercase;
        font-family: cursive;
`