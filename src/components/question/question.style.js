import styled from 'styled-components'
export const QuestionContainer = styled.div`
    background: linear-gradient(#100241, black);
    color: white;
    border: 2px solid whitesmoke;
    font-weight: 700;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 1px 2px 1px lightgray;

        @media(max-width:760px){
       padding: 15px;
       width: 100%;
    }
        @media(max-width:500px){
             padding: 10px;
    }
`
export const Text = styled.h2`
    text-align: center;
    font-family: monospace;
    text-transform: capitalize;

    @media(max-width:760px){
        font-size: 15px;
    }
        @media(max-width:500px){
        font-size: 12px;
    }
`