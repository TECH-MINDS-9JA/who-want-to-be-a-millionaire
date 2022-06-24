import  styled from 'styled-components'

export const CounterContainer = styled.div`
    width: 80px;
    height: 80px;
    position: absolute;
    top: 30%;
    left: 5%;
    border: 5px solid whitesmoke;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-family: arial;

    @media(max-width:985px){
        width: 70px;
        height: 70px;
        top: 35%;
    }
    @media(max-width:490px){
        top: 10%;
        
    }
`
export const Num = styled.h1`
    transition: all 5s linear;
`