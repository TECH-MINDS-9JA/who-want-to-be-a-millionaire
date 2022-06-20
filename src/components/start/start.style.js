import styled from 'styled-components'

export const StartContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to top, rgba(0,0,0,0.02), #020230),url("/img/play.jpg") center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Play = styled.div`
    position: absolute;
    bottom: 7%;
    right: 40%;
    font-size: 40px;
    text-transform: uppercase;
    text-align: center;
    padding: 15px 25px;
    cursor: pointer;
    color: gray;
    opacity: 0.1;
`
export const Form = styled.form`
    width: 400px;
    height: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 20px;
`
export const Label = styled.label`
    font-size: 25px;
    font-family: monospace;
    font-weight: 700;
    color: lightgray;
`
export const Input = styled.input`
width: 200px;
    padding: 5px 15px;
    font-size: 15px;
    border-radius: 3px;
    border: none;
    outline: none;
background: lightgray;

&::placeholder{
    text-align: center;
    font-size: 12px;
    color: black;
    font-weight: 500;
}
`